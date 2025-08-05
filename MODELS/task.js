const { MongoGCPError } = require('mongodb')
const mongoose= require('mongoose')

const schema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        maxlength:[20, "Name cannot be longer than 20"]
    }, completed:{type:Boolean, default:false}
})

module.exports= mongoose.model('Task', schema)