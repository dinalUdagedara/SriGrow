const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const JWT_SECRET = "fdghgffghdtrh561324(){}sgfgrthter"


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
           return res.send({error:"User Exists"});
           

        }
        await User.create({
            fname,
            lname,
            email,
            password:encryptedPassword,
        } );
        res.send({status:"ok"});
    }
    catch(error) {
        res.status(500).send({ error: error.message });
    }
    
});

app.post("/login-user",async(req,res)=>{
    const {emial,password} =req.body;

    const user = await User.findOne({emial});


    if(!user){
        return res.send({error:"User not Found"});
     }
     if(await bcrypt.compare(password,user.password)){
        const token=jwt.sign({},JWT_SECRET);

        if(res.status(201)){
            return res.json({status:"ok",data:token});
        }else{
            return res.json({error:"error"});
        }
     }

     res.json({status:"error",error:"Invalid Password"});

});


app.post("/userData",async(req,res)=>{
    const {token}=req.body;
    try{
        const user = jwt.verify(token,JWT_SECRET);
        const useremail=user.email;
        User.findOne({emial:useremail}).then((data)=>{
            res.send({ststus:"ok",data:data});
        }).catch((error)=>{
            res.send({ststus:"error",data:error});
        });
    }
    catch(error){

    }
})

app.listen(5000,()=>{
    console.log("Server Started...")
});


