// const express = require('express')
import express from 'express'
import { connectDB } from './config/database.js'
import errorMiddleWares from './Error.js'
import userRouter from './routes/User.js'
const app = express()
// console.log("I am user")
app.use('/',userRouter)
// class ErrroHandler extends Error{
//     constructor(message,statusCode){
//         super(message)
//         this.statusCode=statusCode
//     }
// }
// app.get('/', function (req, res, next) {
//     // res.status(404).json({error:"Page not found"})
//     console.log("most first")
//     next()
// }, (req, res, next) => {
  
//     next(new ErrroHandler("unauthorizeds",401) )
//     res.json("This is me")
// }, (req, res, next) => {
//     console.log("second")
//     next()
// });

// app.use((err, req, res) => {
//     err.stataCode=statusCode || 500
//     err.stataCode=err.statusCode || "Internal Server Error"
//     res.status(err.statusCode).json({

//         message: err.message,
//     })
// })
connectDB()
app.listen(3000, () => {
    console.log("App is running on port 4000")
})
app.use(errorMiddleWares)

