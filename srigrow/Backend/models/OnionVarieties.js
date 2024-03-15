const mongoose = require('mongoose')

const OnionSchema = new mongoose.Schema({
    varietyName:String,
    suitableAreas: Array,
    maxTimePeriod:Number,
    maxPrecipitation:Number,
    atmosphericFeautures:String,
    soilCondtion:String,
    specialNotes:String
})

const OnionModel =mongoose.model("onion_varieties",OnionSchema)
module.exports = OnionModel