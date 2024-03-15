const mongoose = require("mongoose");
const UserDetailsSchema = new mongoose.Schema(
    {
        fname:String,
        lname:String,
        email:{type:String,unique:true}, 
        regID:String,
        password:String
    },
    {
        collection:"UserInfo",
    }

    
);

mongoose.model("UserInfo",UserDetailsSchema);