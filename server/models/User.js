import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        default: "_"
    }, email: {
        type: String,
        required: true,
        unique: true
    }, password: {
        type: String,
        required: true
    }, mobile: {
        type: String,
        required: true,
        unique: true
    }, address: {
        type: String,
        required: true,

    }, gender: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
)

const User = model('User', userSchema)

export default User