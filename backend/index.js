import express from "express";
import dotenv from "dotenv";
dotenv.config()
import dbConnection from "./database/connection.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import cors from "cors"



const app = express()

app.use(cors({
    origin: process.env.AI_URL,
    credentials: true
}

))
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser)
app.use("/api/auth", authRouter)
app.use(express.json())



app.listen(port, () => {
    console.log("server started")
})
dbConnection()
export default app;
