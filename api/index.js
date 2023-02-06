import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js"
import hotelsRouter from "./routes/hotels.js"
import cookieParser from "cookie-parser";
import roomsRouter from "./routes/rooms.js"
import cors from 'cors'

dotenv.config();
const app = express()

mongoose.set('strictQuery', false);
const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB")
       }catch(err){
       
           throw err;
       };
       
}

mongoose.connection.on("disconnected",() =>{
    console.log("disConnected MonogoDB");
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/users",(req,res) => {

    res.send("Hello world");
});


app.use("/api/auth",authRouter);
app.use("/api/users",usersRouter);
app.use("/api/hotels",hotelsRouter);
app.use("/api/rooms",roomsRouter);

app.use((err,req,res,next) => {

    return res.status(500).json("Hello from error handler");
})

app.listen(8000,() => {
    connect();
    console.log("Connected to Backend");
})