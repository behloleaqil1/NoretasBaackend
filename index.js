const express = require('express');
const mongoose = require('mongoose');
/**
 * Models
 */

const {NavMenus} = require('./Modules/CMS/Models/Navbar');


const app = express();
app.use(express.json());
/**
 *  Routes
 */
const cms_routes = require('./Modules/CMS/Routes/CmsRoutes');
app.use('/cms', cms_routes)


const port = process.env.PORT | 5000;

/**
 *  Mongo Connection
 */
mongoose.connect('mongodb+srv://behlole:a5121472z@cluster0.qkdpg.mongodb.net/NoretaasBackend?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(() => {
        console.log("Database connected ..");
    })
    .catch((e) => {
        console.log("Database connection failed...", e.message);
    });

app.listen(port, console.log(`Server running at ${port}`));
