const router = require('express').Router();
const controller = require('../controllers/searchCtrl');

router.get('/allshops', controller.getAllShops),
module.exports = router;