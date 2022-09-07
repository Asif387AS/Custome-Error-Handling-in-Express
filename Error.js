const errorMiddleWares=(err,req,res,next)=>{
    err.message=err.message || "Internal Server Error"
    err.statusCode=err.statusCode || 500
    console.log(err.message)
   if(err.code==11000){
    err.message= "Duplicat Key Error"
    err.statusCode= 400
   }
    res.status(err.statusCode).json({
      success:false,
      message:err.message
    })
}
export default errorMiddleWares;