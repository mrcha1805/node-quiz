const router = require("express").Router();
const taxController = require('../controllers/tax-controller');

router.get('/:netincome', taxController.getTax);

module.exports = router;
