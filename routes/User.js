import express from 'express'
import { newUser } from '../Controller/userController.js'
const router=express.Router()

router.get('/',newUser)

export default router

