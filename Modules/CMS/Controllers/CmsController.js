const {NavMenus} = require('../Models/Navbar');
const {FeaturedCard} = require('../Models/FeaturedCard');
const {RightFeaturedCard} = require('../Models/RightFeaturedCard');
const {EventServices} = require('../Models/EventServices');
const {Client} = require('../Models/Client');
const {ContactForm} = require('../Models/ContactForm');
const {AboutUsSection} = require('../Models/AboutUsSection');

module.exports = {
    indexNav: async (req, res) => {
        let nav_menu = await NavMenus.find({});
        res.json({data: nav_menu, message: 'Nav manu Fetched Successfully', success: true})

    },
    indexFeaturedCards: async (req, res) => {
        let data = {
            FeaturedCard: await FeaturedCard.find({}),
            RightFeaturedCard: await RightFeaturedCard.findOne({})
        }
        res.json({data: data, message: 'Featured Cards Fetched Successfully', success: true})

    },
    indexRightFeaturedCards: async (req, res) => {
        let right_featured_cards = await RightFeaturedCard.findOne({});
        res.json({data: right_featured_cards, message: 'Right Featured Cards Fetched Successfully', success: true})

    },
    indexContactForm: async (req, res) => {
        let contact_form = await ContactForm.findOne({});
        res.json({data: contact_form, message: 'Contact Forms Fetched Successfully', success: true})
    },
    indexAboutUsSections: async (req, res) => {
        let about_us_sections = await AboutUsSection.find({});
        res.json({data: about_us_sections, message: 'About Us Sections Fetched Successfully', success: true});
    },
    indexEventServices: async (req, res) => {
        let event_services = {
            Events: await EventServices.find({is_heading: {$exists: false}}),
            Heading: await EventServices.findOne({is_heading: {$exists: true}})
        };
        res.json({data: event_services, message: 'Event Services Fetched Successfully', success: true})
    },
    indexClients: async (req, res) => {
        let clients = await Client.find({});
        res.json({data: clients, message: 'Clients Fetched Successfully', success: true})
    },
    createNav: async (req, res) => {
        if (req.body.parent_id)
            if (await NavMenus.find({_id: req.body.parent_id})) {
                let nav_menu = await NavMenus.updateOne({_id: req.body.parent_id}, {$push: {"children": req.body}});
                res.json({data: nav_menu, message: 'Nav manu Created Successfully', success: true})

            } else {
                res.json({data: {}, message: 'Invalid Parent Id', success: false})

            }
    },

    createFeaturedCards: async (req, res) => {
        let featured_card = await FeaturedCard.create(req.body);
        res.json({data: featured_card, message: 'Featured Card Created Successfully', success: true})
    },
    createRightFeaturedCards: async (req, res) => {
        let right_featured_card = await RightFeaturedCard.create(req.body);
        res.json({data: right_featured_card, message: 'Right Featured Card Created Successfully', success: true})
    },
    createEventServices: async (req, res) => {
        let event_services = await EventServices.create(req.body);
        res.json({data: event_services, message: 'Event Services Created Successfully', success: true})
    },
    createClients: async (req, res) => {
        let clients = await Client.create(req.body);
        res.json({data: clients, message: 'Clients Created Successfully', success: true})
    },
    createContactForm: async (req, res) => {
        let contact = await ContactForm.create(req.body);
        res.json({data: contact, message: 'We Will Contact you shortly', success: true})
    },
    createAboutUsSections: async (req, res) => {
        let about_us_sections = await AboutUsSection.create(req.body);
        res.json({data: about_us_sections, message: 'About Us Sections Fetched Successfully', success: true});
    },
    update: async () => {
        /**
         * Update a Inventory
         */
    },

    delete: async () => {
        /**
         * Delete a Inventory
         */
    }
}
