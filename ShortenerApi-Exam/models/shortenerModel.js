const mongoose = require("mongoose");
const shortenerSchema = new mongoose.Schema({
    longurl:{
        type: String,
        required: true
    },
    urlcode: {
        type: String,
        required: true
    },
    shorturl: {
        type: String,
        required: true
    }
    
}, {timestamps: true})

module.exports = mongoose.model("Shortener", shortenerSchema)