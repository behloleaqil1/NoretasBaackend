const {NavMenus} = require('../Models/Navbar');

module.exports = {
    index: async (req, res) => {
        res.json({message: "Hello World"});
    },
    createNav: async (req, res) => {
        let nav_menu = await NavMenus.create(req.body);
        res.json({data: nav_menu, message: 'Nav manu Created Successfully'})
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
