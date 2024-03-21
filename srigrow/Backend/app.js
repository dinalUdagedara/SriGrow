const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const JWT_SECRET = "fdghgffghdtrh561324(){}sgfgrthter"

const RiceModel = require('./models/RiceVarieties')
const OnionModel = require('./models/OnionVarieties')
const MaizeModel = require('./models/MaizeVarieties')
const ChillieModel = require('./models/ChillieVarieties');
const NewsModel = require("./Components/news");
const CropPriceModel = require("./Components/marketInfo");



const mongoUrl = "mongodb://localhost:27017/sdgp_se_35_crop_info";

mongoose.connect(mongoUrl).then(()=>{console.log("Connceted to Database")})
.catch(e=>console.log(e))




//Rice Varieties Fetching

app.get('/getRiceVarieties',(req,res)=>{
  RiceModel.find()
  .then(varieties=>res.json(varieties))
  .catch(err=>res.json("Error is in /getRiceVarieties",err))
})


//Onion Varieties Fetching

app.get('/getOnionVarieties',(req,res)=>{
  OnionModel.find()
  .then(varieties=>res.json(varieties))
  .catch(err=>res.json("Error is in /getOnionVarieties",err))
})

//Maize Varieties Fetching

app.get('/getMaizeVarieties',(req,res)=>{
  MaizeModel.find()
  .then(varieties=>res.json(varieties))
  .catch(err=>res.json("Error is in /getMaizeVarieties",err))
})

//Chillie Varieties Fetching

app.get('/getChillieVarieties',(req,res)=>{
  ChillieModel.find()
  .then(varieties=>res.json(varieties))
  .catch(err=>res.json("Error is in /getChillieVarieties",err))
})





//Fetch news Data

app.get('/getNews',(req,res)=>{
  NewsModel.find()
  .then(news=>res.json(news))
  .catch(err=>res.json("Error is in /getNews",err))
})



// Fetch Crop Price Data
app.get('/getMarketItems', (req, res) => {
  CropPriceModel.find()
      .then(info => res.json(info))
      .catch(err => res.status(500).json({ error: "Error fetching market items", details: err }));
});











require("./userDetals")

const User = mongoose.model("UserInfo");

app.post("/register",async(req,res)=>{
    const {fname,lname,email,regID,password}=req.body;

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
            regID,
            password:encryptedPassword,
        } );
        res.send({status:"ok"});
    }
    catch(error) {
        res.status(500).send({ error: error.message });
    }
    
});

app.post("/login-user",async(req,res)=>{
    const {email,password} =req.body;

    const user = await User.findOne({email});


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
        User.findOne({email:useremail}).then((data)=>{
            res.send({status:"ok",data:data});
        }).catch((error)=>{
            res.send({status:"error",data:error});
        });
    }
    catch(error){

    }
})


const plantSchema = new mongoose.Schema({
    plantType: String,
    varietyCode: String,
    suitableAreas: [String],
    MaxTime: Number,
    MinTime: Number,
    MinRainfall: Number,
    MaxRainfall: Number,
    ClimaticFactorsDescription: String,
    SoilConditionsDescription: String,
    SpecialNotes: String
  });
  


app.post("/addPlant", async (req, res) => {
    const {
      plantType,
      varietyCode,
      suitableAreas,
      MaxTime,
      MinTime,
      MinRainfall,
      MaxRainfall,
      ClimaticFactorsDescription,
      SoilConditionsDescription,
      SpecialNotes
    } = req.body;
  
    try {

      let collectionName;
      switch (plantType.toLowerCase()) {
        case 'rice':
          collectionName = 'rice_varieties';
          break;
        case 'onion':
          collectionName = 'onion_varieties';
          break;
        case 'maize':
          collectionName = 'maize_varieties';
          break;
        case 'chillie':
          collectionName = 'chillie_varieties';
          break;
        default:
          return res.status(400).json({ status: "error", error: "Invalid plant type" });
      }
  
      // Define the model using the schema and specify the collection name
      const PlantVariety = mongoose.model(plantType.charAt(0).toUpperCase() + plantType.slice(1) + 'Variety', plantSchema, collectionName);
  
      // Create a new instance of PlantVariety model with the provided data
      const newPlantVariety = new PlantVariety({
        plantType,
        varietyCode,
        suitableAreas,
        MaxTime,
        MinTime,
        MinRainfall,
        MaxRainfall,
        ClimaticFactorsDescription,
        SoilConditionsDescription,
        SpecialNotes
      });
  
      // Save the new plant variety to the database
      const savedPlantVariety = await newPlantVariety.save();
  
      // If everything is successful, send a success response
      res.status(201).json({ status: "ok", data: savedPlantVariety });
    } catch (error) {
      // If there's an error, send an error response
      res.status(500).json({ status: "error", error: error.message });
    }
  });



  
//   // Now you can use the RiceVariety model to add data to the collection
//   // For example, to add a single rice variety
//   const newRiceVariety = new RiceVariety({
//     plantType: 'Rice',
//     varietyCode: 'R001',
//     suitableAreas: ['Ampara', 'Anuradhapura'],
//     MaxTime: 35,
//     MinTime: 25,
//     MinRainfall: 50,
//     MaxRainfall: 100,
//     ClimaticFactorsDescription: 'Description of climatic factors',
//     SoilConditionsDescription: 'Description of soil conditions',
//     SpecialNotes: 'Special notes'
//   });
  
//   newRiceVariety.save()
//     .then((result) => {
//       console.log('Rice variety added successfully:', result);
//     })
//     .catch((error) => {
//       console.error('Error adding rice variety:', error);
//     });


app.listen(5000,()=>{
    console.log("Server Started...")
});


