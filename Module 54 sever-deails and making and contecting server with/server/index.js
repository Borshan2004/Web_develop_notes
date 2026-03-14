const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

//app.use(express.json()): Converts incoming JSON data from a request into a JavaScript object so you can read it using req.body.
app.use(express.json())

//app.use(cors()): Permits your frontend (like a React app) to talk to your backend server without being blocked by browser security.
app.use(cors())


const user = [
    {
        "id": 1,
        "name": "borshan",
        "email": "borshanpurification@gmailcom"
    },
    {
        "id": 2,
        "name": "borno",
        "email": "puriborno@gmail.com"
    },
    {
        "id": 3,
        "name": "pintu",
        "email": "pintupurification229@gmail.com"
    }
]


app.get('/', (req, res) => {
    res.send('Hello World i am new server maker')
})

app.get('/user', (req, res) => {
    res.send(user)
})

app.post('/user',(req,res)=>{
    console.log('user post method');

    const newUser = req.body;
    newUser.id = user.length+1;
    user.push(newUser);
    res.send(newUser);
    


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

