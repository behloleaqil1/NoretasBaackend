const mongoose = require("mongoose");

const navSchema = new mongoose.Schema({
    heading: String,
    sub_heading: String,
    img_url: String

});

exports.FeaturedCard = new mongoose.model("FeaturedCard", navSchema);
