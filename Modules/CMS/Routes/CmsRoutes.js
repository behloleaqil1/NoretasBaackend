const router = require('express').Router();
const cms_controller = require('../Controllers/CmsController');

router.get('/', cms_controller.index);
router.post('/nav', cms_controller.createNav);


module.exports = router;
