require('./db/connect')

const express = require('express')
const app= express()
const task= require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not-found')
const errorHandlesMiddleware= require('./middleware/error-hand')
//middlewares
app.use(express.static('./public'))
app.use(express.json())


// app.use('public')
app.use('/api/v1/tasks', task)
app.use(notFound)
app.use(errorHandlesMiddleware)

const port= process.env.PORT || 3000

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening ON ${port}` ))
    }
    catch(e){
        console.log(e);
        
    }
}

start()
