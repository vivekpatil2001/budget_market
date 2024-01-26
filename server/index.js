import mongoose, { get } from "mongoose";
import express, { response } from "express";
import dotenv from "dotenv";
import { loginUser, signUpUser } from "./controllers/user.js";
import { getOrders, postOrders, fetchOrder } from "./controllers/order.js";
import { allProducts, deleteOneProduct, findProduct, postProducts, searchProducts, updateOneProduct } from "./controllers/product.js";
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;


const connectDB = async () => {
    const conn = await mongoose.connect(process.env.
        MONGODB_URI);

    if (conn) {
        console.log("mongoDB connected succesfully")
    }
};


//post signup

app.post("/api/v1/signUp", signUpUser)


//post:login 
app.post("/api/v1/login", loginUser)

//get/products
app.get("/api/v1/products", allProducts)

//post /api/products
app.post("/api/v1/products", postProducts )

//get/product:id

app.get("/api/v1/products/:_id", findProduct)

//delete/products
app.delete('/api/v1/products/:_id', deleteOneProduct );

//put/products/update
app.put("/api/v1/products", updateOneProduct );

//get/products/search?query
app.get("/api/v1/products/search", searchProducts);


//get/orders
app.get("/api/v1/orders", getOrders)


//post/orders
app.post("/api/v1/orders", postOrders);

//get/order/id

app.get("/api/v1/orders/:_id", fetchOrder)

app.listen(PORT, () => {
    console.log(`Port running on ${PORT}`);
    connectDB()
});