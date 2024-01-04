import mongoose from "mongoose";
import  express  from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json);

const PORT = process.env.PORT||5000;


const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.
        MONGODB_URI);

        if(conn){
            console.log("mongoDB connected succesfully")
        }
}
connectDB()

app.listen(PORT, ()=>{
    console.log(`Port running on ${PORT}`)
 
})