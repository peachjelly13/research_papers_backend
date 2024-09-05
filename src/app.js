import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
// you first need to create the app before you configure the app 

app.use(cors({
    origin:process.env.CORS_ORIGIN,
}))
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));


export {app}