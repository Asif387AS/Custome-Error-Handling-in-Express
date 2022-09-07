import { catchAsynError } from "../middlewares/catchAsynError.js";
import { User } from "../models/user.js";

import ErrorHandler from "../utils/errorHandler.js";
export const newUser =catchAsynError(async (req, res, next) => {

  const user=await User.findOne({email:'asif@gmail.com'})
  if(user){
      return next(new ErrorHandler('User Alread Exist',400))
  }
  await User.create({
    name:"asif",
    email:"asif@gmail.com"
  })
  res.status(201).json({ message: "User Created Succesfully" });
 
});
 