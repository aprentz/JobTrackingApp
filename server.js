import * as dotenv from 'dotenv'
dotenv.config()
import morgan from "morgan"
import express from "express"
import mongoose from 'mongoose'
import {dirname} from 'path'
import { fileURLToPath } from 'url'
import path from 'path'
import cloudinary from 'cloudinary';

// routers
import jobRouter from './routes/jobRouter.js'
import authRouter from './routes/authRouter.js'
import userRouter from './routes/userRouter.js'

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'
import { authenticateUser } from './middleware/authMiddleware.js'
import cookieParser from 'cookie-parser'

// Cloudinary
cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.CLOUD_API_KEY,
   api_secret: process.env.CLOUD_API_SECRET,
 });

 
// EXPRESS SERVER
const app = express()
const port = process.env.PORT || 5100
app.use(express.json())
app.use(cookieParser())

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname, './public')))
// MORGAN
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}

// ROUTES
app.use('/api/v1/jobs', authenticateUser, jobRouter)
app.use('/api/v1/users', authenticateUser, userRouter)
app.use('/api/v1/auth', authRouter)

// ERROR HANDLING
app.use("*", (req, res) => {
   return res.status(404).json({ msg: "Not found" })
})

app.use(errorHandlerMiddleware)

// MongoDB
try {
   await mongoose.connect(process.env.MONGO_URL)
   app.listen(port, () => {
      console.log(`server is running on PORT ${port}...`)
   })
} catch (error) {
   console.log(error)
   process.exit(1)
}