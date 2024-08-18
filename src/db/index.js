import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";
import {logger} from "../utils/logger.js"


const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DATABASE_NAME}`)
        logger.info(`\n MONGODB connected !! DB Host: ${connectionInstance.connection.host}`);

    } catch (error) {
        logger.error("Mongodb connection error",error);
        process.exit(1);
        
    }
}

export default connectDB;