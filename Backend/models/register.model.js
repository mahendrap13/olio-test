import mongoose from "mongoose";
const { Schema } = mongoose;
const RegisterModel = new Schema({
    fullName: {
        type: String,
        default: null
    },
    gender: {
        type: String,
        default: null
    },
    dateOfBirth: {
        type: String,
        default: null
    },
    hobbies: {
        type: Array,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    resume: {
        type: String,
        default: null
    }
})


export default mongoose.model("register", RegisterModel)