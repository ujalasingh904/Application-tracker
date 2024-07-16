import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import authRoute from "./Routes/authRoute.js"
import jobRoute from "./Routes/jobRoute.js"
import updateAnddeleteRoute from "./Routes/updateAnddeleteRoute.js"
import cookieParser from "cookie-parser"
dotenv.config()

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err.message))


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
const port = process.env.PORT || 5000

app.use("/api/auth", authRoute)
app.use("/api/job", jobRoute)
app.use("/api/u&d",updateAnddeleteRoute)
app.listen(port, () => console.log(`server listening on port :${port}`))
