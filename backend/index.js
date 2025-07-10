import express from "express";
import dotenv from "dotenv";
import dbConnection from "./database/connection.js"

dotenv.config()

const app =express()
const port = process.env.PORT || 5000

app.get ("/",(req,res)=>{
    res.send("hiii")
})

app.listen(port,()=>{
    console.log("server started")
})

dbConnection();

export default app;
