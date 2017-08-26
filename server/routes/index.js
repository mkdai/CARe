const router = require('express').Router();

router.use('/home', require('./landingPage'));
router.use('/search', require('./searchPage'));
router.use('/shopProfile', require('./shopProfile'));
router.use('/userProfile', require('./userProfile'));

module.exports = router;