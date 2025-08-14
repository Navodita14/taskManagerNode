const {CustomAPIError}= require('../errors/custom-error')

const errorHandlings= (err, req,res,next)=>{
    // console.log(err.message, err.status);
    if(err instanceof CustomAPIError){
    return res.status(err.statusCode).json({msg : err.message})
    }
    return res.status(500).json({msg : 'Something went wrong'})
}

module.exports=errorHandlings