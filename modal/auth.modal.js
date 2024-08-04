const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    verifyToken:{type:String},
},
{timestamps:true})
const AuthModal = mongoose.model("user", userSchema);
module.exports = {AuthModal}

