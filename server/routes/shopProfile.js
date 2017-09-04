const router = require("express").Router();
const controller = require("../controllers/shopProfilePageCtrl");

router.post("/postHistoryEntry", controller.postHistoryEntry);

module.exports = router;
