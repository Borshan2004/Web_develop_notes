//for installing npm i express cors mongodb

//user : BpData
//pass : X68xC35O9aGSSLh1


const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port =  5000;



app.use(cors());
app.use(express.json())

const uri = "mongodb+srv://BpData:X68xC35O9aGSSLh1@bpdatastore.vot3ykk.mongodb.net/?appName=BPdataStore";




const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();


        // const database = client.db('userdb');
        // const usersCollection = database.collection('users')

        const usersCollection = client.db('userdb').collection('users');


        app.get('/users',async(req,res)=>{
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        app.post('/users',async(req,res)=>{
            
            // console.log("data is running ")
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser);
            res.send(result)
        })

        app.delete('/users/:id',async(req,res)=>{
            const id = req.params.id
            const query = {_id: new ObjectId(id)}
            const result = await usersCollection.deleteOne(query)
            res.send(result)
        })


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        
    }
    finally{

    }
    

}

run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('Simple cround is running')
})

app.listen(port, () => {
    console.log(`Simple CRUD server is running on ${port}`)
})

