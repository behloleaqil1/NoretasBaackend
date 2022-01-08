const mongoose = require("mongoose");

const navSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    parent_id: String,
    is_parent: Boolean,
    url: String,
    children: Array,

});

exports.NavMenus = new mongoose.model("NavMenus", navSchema);
