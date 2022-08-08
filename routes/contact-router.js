const router = require("express").Router();
const contactController = require('../controllers/contact-controller');

router.post('/contact', contactController.createContact);
router.post('/group', contactController.createGroup);
router.get('/group', contactController.getGroup);
module.exports = router;