const mongoose = require("mongoose");

const navSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    city: String,
    comment: String,
    img_url: String
});

exports.Client = new mongoose.model("Client", navSchema);
