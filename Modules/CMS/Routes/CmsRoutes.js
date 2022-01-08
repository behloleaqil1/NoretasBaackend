const router = require('express').Router();
const cms_controller = require('../Controllers/CmsController');

/**
 * Image Uploading Multer Middleware
 */
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, call_back) => {
        call_back(null, 'public/Images');
    },
    filename: (req, file, call_back) => {
        console.log(file);
        let file_name = Date.now() + path.extname(file.originalname);
        req.body.img_url = 'Images/' + file_name;
        call_back(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})

router.get('/nav', cms_controller.indexNav);
router.post('/nav', cms_controller.createNav);

router.get('/featured_cards', cms_controller.indexFeaturedCards);
// router.post('/featured_cards', upload.single('img_url'), cms_controller.createFeaturedCards);
router.post('/featured_cards', cms_controller.createFeaturedCards);


router.get('/right_featured_cards', cms_controller.indexRightFeaturedCards);
router.post('/right_featured_cards', cms_controller.createRightFeaturedCards);


router.post('/event_services', upload.single('img_url'), cms_controller.createEventServices);
router.get('/event_services', cms_controller.indexEventServices);


router.get('/clients', cms_controller.indexClients);
router.post('/clients', upload.single('img_url'), cms_controller.createClients);


module.exports = router;
