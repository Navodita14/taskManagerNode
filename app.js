require('./db/connect')

const express = require('express')
const app= express()
const task= require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()
app.use(express.json())

app.get('/hello',(req,res)=>{
    res.send("Iam Task Mnager")
})

// app.use('public')
app.use('/api/v1/tasks', task)


const port =3000

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log("Server is listening"))
    }
    catch(e){
        console.log(e);
        
    }
}

start()
