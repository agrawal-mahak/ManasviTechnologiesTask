const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required: true,
        trim: true,
    },
    lastname: {
        type:String,
        required: true,
        trim: true,
    },
    email: {
        type:String,
        required: true,
        trim: true
    },
    password: {
        type:String,
        required: true,
    },
    acccountType: {
        type:String,
        enum:["Student", "Instructor"],
        trim: true,
    },
     
});

module.exports = mongoose.model("User", userSchema);