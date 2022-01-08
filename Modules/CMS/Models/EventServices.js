const mongoose = require("mongoose");

const navSchema = new mongoose.Schema({
    text: String,
    description: String,
    is_heading: String,
    img_url: String,
});

exports.EventServices = new mongoose.model("EventServices", navSchema);
