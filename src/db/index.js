import mongoose from "mongoose";
import DB_NAME from "../constants.js";

const connectDB = async () =>{
try {
    const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("database connected successfully");    
} catch (error) {
    console.log("database connection error",error);
    process.exit(1)
}



}