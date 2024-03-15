const mongoose = require('mongoose')

const ChilleSchema = new mongoose.Schema({
    varietyName:String,
    suitableAreas: Array,
    maxTimePeriod:Number,
    maxPrecipitation:Number,
    atmosphericFeautures:String,
    soilCondtion:String,
    specialNotes:String
})

const ChillieModel =mongoose.model("chillie_varieties",ChilleSchema)
module.exports = ChillieModel