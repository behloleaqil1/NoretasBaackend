const mongoose = require("mongoose");

const navSchema = new mongoose.Schema({
    name: String,
    email: String,
    venue: String,
    phone_number: String,
    message: String
});

exports.ContactForm = new mongoose.model("ContactForm", navSchema);
