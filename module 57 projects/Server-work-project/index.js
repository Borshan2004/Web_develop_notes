const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

//this need for env setup
require('dotenv').config();

const cors = require('cors');
const port = 3000;

app.use(cors())
app.use(express.json())

//PlantCare
//pi4xDllEeW4u4gHG


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

        app.post('/plantinfo',async(req,res)=>{
            const data = req.body;
            const result = await plantdatacollection.insertOne(data)
            res.send(result)
        })

        app.get('/plantinfo',async(req,res)=>{
            const result = await plantdatacollection.find().toArray();
            res.send(result)
        })

        app.get('/plantinfo/:id',async(req,res)=>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await plantdatacollection.findOne(query);
            res.send(result)
        })

        app.delete('/plantinfo/:id',async(req,res)=>{

            const id = req.params.id;
            const qurey = {_id : new ObjectId(id)}
            const result = await plantdatacollection.deleteOne(qurey);
            res.send(result);

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