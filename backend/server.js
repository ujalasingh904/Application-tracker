import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import authRoute from "./Routes/authRoute.js"
import jobRoute from "./Routes/jobRoute.js"
import updateAnddeleteRoute from "./Routes/updateAnddeleteRoute.js"
import cookieParser from "cookie-parser"
import path from "path"
dotenv.config()

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err.message))


const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true, 
    }
))

const port = process.env.PORT || 5000

const __dirname = path.resolve();

app.use("/api/auth", authRoute)
app.use("/api/job", jobRoute)
app.use("/api/u&d", updateAnddeleteRoute)

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist" ,"index.html"))
})

app.listen(port, () => console.log(`server listening on port :${port}`))
