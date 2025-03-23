import cookieParser from "cookie-parser";
import cors from "cors";
import Dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

const PORT = 8000
const app = express()

Dotenv.config()

app.use(express.json())//middleware / JSON parser

app.listen(PORT,()=>{
    try{
        console.log(`Server running on port ${PORT}`);
        
    }catch(error){
        throw error
    }
})

const connectDB = async() => {
    try{
        const host = await mongoose.connect(`${process.env.MONGODB_URI}/medi`)
            console.log(`Mongo db is connected to ${host}`);
            
    }catch(error){
        throw error
        process.exit(1)
    }
}

app.use(cors({   //use is used for middlewares
    origin : process.env.CORS_ORIGIN,
    credentials : true
}
)) 

app.get('/products',(req,res)=>{
    res.status(200).send({
       "image" : "link"
    })
    res.status(402).send(console.log("mewo"))
})

app.use(
    express.json({limit:"20kb"}))
    
app.use(express.urlencoded({extended:true,limit :"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())
    
export { app };
    
