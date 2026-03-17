const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
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
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("hello the coffe server")
})

app.listen(port, () => {
    console.log(`Example aoo listening on port ${port}`)
})