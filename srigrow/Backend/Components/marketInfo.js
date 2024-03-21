const mongoose = require('mongoose');


// Define a Mongoose schema
const CropPriceSchema = new mongoose.Schema({
    location: String,
    crop_details: [{
        crop_name: String,
        previous_week_price: String, // Keep all fields as strings
        last_week_price: String,
        this_week_price: String,
        image_type:String
    }]
});

// Create a Mongoose model
const CropPriceModel = mongoose.model('market_place_info', CropPriceSchema);

module.exports = CropPriceModel;
