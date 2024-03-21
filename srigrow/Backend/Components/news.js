const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    date: String,
    headLine : String,
    content : String,
    link: String
})

const NewsModel =mongoose.model("news",newsSchema)
module.exports = NewsModel