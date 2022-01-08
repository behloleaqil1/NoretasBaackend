const mongoose = require("mongoose");

const navSchema = new mongoose.Schema({
    heading: String,
    sub_heading: String,
    services: Array,
    url: String
});

exports.RightFeaturedCard = new mongoose.model("RightFeaturedCard", navSchema);
