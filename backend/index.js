import express from "express";
import dotenv from "dotenv";
import dbConnection from "./database/connection.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
dotenv.config()

const app =express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser)
app.use("/api/auth",authRouter)
app.use(express.json())



app.listen(port,()=>{
 console.log("server started")
})
dbConnection()
export default app;
