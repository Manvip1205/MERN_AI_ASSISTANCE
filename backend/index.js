import express from "express";
import dotenv from "dotenv";
import dbConnection from "./database/connection.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.AI_URL,
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser()); // ✅ Fixed: call the function

app.use("/api/auth", authRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

dbConnection();

export default app;
