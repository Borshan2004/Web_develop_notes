const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');

//this need for env setup
require('dotenv').config();

const cors = require('cors');
const port = 3000;

// app.use(cors())

const cookieParser = require('cookie-parser');


// cookie set up
app.use(cors({
    origin: ['http://localhost:5174'],
    credentials: true
}))


app.use(express.json())

app.use(cookieParser());//middleware-> use the middleware for those for which i need the security 
//PlantCare
//pi4xDllEeW4u4gHG

const logger = (req,res,next) =>{
    console.log('inside the logger middleware');
    next();
}

const verifyToken= (req,res,next) =>{
    const token = req?.cookies?.token
    console.log('cookies in the middleware',req.cookies)
    
    if(!token){
        return res.status(401).send({message: 'unauthorized access'})
    }

    //verify token
    jwt.verify(token,process.env.SCRET_CODE,(err,decoded)=>{
        if(err){
            return res.status(401).send({message:'unauthorized access'})
        }
        req.decoded = decoded
        next()
        // console.log(decoded)
    })



}


const uri = `mongodb+srv://${process.env.PLANT_N}:${process.env.PLANT_P}@bpdatastore.vot3ykk.mongodb.net/?appName=BPdataStore`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const plantdatacollection = client.db("plantDB").collection("plantinfo");


        //hwt token related api

        app.post('/jwt', async (req, res) => {

            const useremail = req.body;

            //gerate a token
            const token = jwt.sign(useremail, process.env.SCRET_CODE, { expiresIn: '1d' });

            //set token in the cookies

            res.cookie('token', token, {
                httpOnly: true,
                secure: false,

            })


            res.send({ sucess: true })

        })



        app.post('/plantinfo',logger,verifyToken, async (req, res) => {
            // console.log('cookies recieved ',req.cookies)
            const data = req.body;
            const email = data.email;

            if(email!==req.decoded.email){
                return res.status(403).send({message:'forbidden access'})
            }

            const result = await plantdatacollection.insertOne(data)
            res.send(result)
        })

        app.get('/plantinfo', async (req, res) => {
            const result = await plantdatacollection.find().toArray();
            res.send(result)
        })

        app.get('/plantinfo/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await plantdatacollection.findOne(query);
            res.send(result)
        })

        app.put('/plantinfo/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true }
            const updatedata = req.body;
            const updatedoc = {
                $set: updatedata
            }
            const result = await plantdatacollection.updateOne(filter, updatedoc, options)
            res.send(result)


        })

        app.delete('/plantinfo/:id', async (req, res) => {

            const id = req.params.id;
            const qurey = { _id: new ObjectId(id) }
            const result = await plantdatacollection.deleteOne(qurey);
            res.send(result);

        })

        app.get('/my_plant',verifyToken,async(req,res)=>{
            // req.decoded.email comes from the verifyToken middleware
            const email = req.decoded.email;

            const query  = {email:email}

            const result = await plantdatacollection.find(query).toArray();

            res.send(result)
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("hello");
})

app.listen(port, () => {
    console.log(`example listening on port ${port}`);
})