import mongoose from "mongoose";

const dbConnection = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "AI_ASSISTANT"
    })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });
};

export default dbConnection;
