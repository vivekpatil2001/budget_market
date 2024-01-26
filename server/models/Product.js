import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,

    }, price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    brand: {
        type: String
    }
})

const Product = model("Product", productSchema)

export default Product