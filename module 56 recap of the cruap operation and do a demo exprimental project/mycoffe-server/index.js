const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const port = 3000;

//Coffestore
//y6gLfvm0pYkb3VK6

require('dotenv').config();

app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.COFFEE_DB_U}:${process.env.COFFEE_DB_P}@bpdatastore.vot3ykk.mongodb.net/?appName=BPdataStore`;

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
        // Send a ping to confirm a successful connection

        const coffescollection = client.db('coffeeDB').collection('coffes')


        app.get('/coffes',async(req,res)=>{
            const result = await coffescollection.find().toArray();
            res.send(result)
        })

        app.post('/coffes',async(req,res)=>{
            const coffedata = req.body;
            const result = await coffescollection.insertOne(coffedata)
            res.send(result)
        })

        app.delete('/coffes/:id',async(req,res)=>{

            const id = req.params.id;
            const query = {_id : new ObjectId(id)}
            const result = await coffescollection.deleteOne(query);
            res.send(result);

        })

        app.get('/coffes/:id',async(req,res)=>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await coffescollection.findOne(query)
            res.send(result);
        })

        app.put('/coffes/:id',async(req,res)=>{
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)}
            const options = {upsert:true};
            const updatecoffe = req.body;

            const updatedoc = {
                $set:updatecoffe
            }

            const result = await coffescollection.updateOne(filter,updatedoc,options)
            res.send(result)

        })
        

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } 
    finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("hello the coffe server")
})

app.listen(port, () => {
    console.log(`Example aoo listening on port ${port}`)
})