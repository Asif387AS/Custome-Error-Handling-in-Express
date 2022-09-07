import mongoose from "mongoose";

export const connectDB=async()=>{
try {
       const {connection}= await mongoose.connect('mongodb://localhost:27017/expreseErrorHandling')
    console.log(`Database connected with ${connection.host}`)

} catch (error) {
    console.log(error)
}
}