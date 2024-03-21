const mongoose = require('mongoose')

const RiceSchema = new mongoose.Schema({
    varietyName:String,
    suitableAreas: Array,
    maxTimePeriod:Number,
    maxPrecipitation:Number,
    atmosphericFeautures:String,
    soilCondtion:String,
    specialNotes:String
})

const RiceModel =mongoose.model("rice_varieties",RiceSchema)
module.exports = RiceModel