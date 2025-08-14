const mongoose= require('mongoose')

const schema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
    }, completed:{type:Boolean, default:false}
})

module.exports= mongoose.model('Task', schema)