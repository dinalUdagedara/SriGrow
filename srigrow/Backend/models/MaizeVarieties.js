const mongoose = require('mongoose')

const MaizeSchema = new mongoose.Schema({
    varietyName:String,
    suitableAreas: Array,
    maxTimePeriod:Number,
    maxPrecipitation:Number,
    atmosphericFeautures:String,
    soilCondtion:String,
    specialNotes:String
})

const MaizeModel =mongoose.model("maize_varieties",MaizeSchema)
module.exports = MaizeModel