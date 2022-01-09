const mongoose = require("mongoose");

const navSchema = new mongoose.Schema({
    tab_name: String,
    tab_description: String,
    image_url: String,
    points: Array,
});

exports.AboutUsSection = new mongoose.model("AboutUsSection", navSchema);
