import connectDB from "./db/index.js";
import dotenv from "dotenv";
import logger from "./utils/logger.js";
import { app } from "./app.js";
//importing dotenv in the start of our file itself 
dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on("error",(err)=>{
        logger.info(`Error in connecting to the application`,err);
        throw err;
    })
    app.listen(process.env.PORT || 8000, ()=>{
        logger.info(`Server is running on the port ${process.env.PORT}`);
    });

})
.catch((err)=>{
    logger.info("Mongo Db connection failed!!!",err);
})