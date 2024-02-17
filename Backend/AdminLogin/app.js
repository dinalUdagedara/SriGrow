const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");

const mongoUrl = "mongodb://localhost:27017/sdgp_se_35_crop_info";

mongoose.connect(mongoUrl).then(()=>{console.log("Connceted to Database")})
.catch(e=>console.log(e))



require("./userDetals")
const User = mongoose.model("UserInfo");

app.post("/register",async(req,res)=>{
    const {fname,lname,email,password}=req.body;

const encryptedPassword = await bcrypt.hash(password,10)

    try{
        const oldUser= await User.findOne({email});

        if(oldUser){
           return res.send({error:"User  Exists"});
        }
        await User.create({
            fname,
            lname,
            email,
            password:encryptedPassword,
        } );
        res.send({status:"Ok"});
    }
    catch(error) {
        res.status(500).send({ error: error.message });
    }
    
});

app.listen(5000,()=>{
    console.log("Server Started...")
})


