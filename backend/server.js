import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import authRoute from "./Routes/authRoute.js"
import cookieParser from "cookie-parser"

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err.message))

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
const port = process.env.PORT || 5000

app.use("/api/auth",authRoute)
app.listen(port, () => console.log(`server listening on port :${port}`))
