const router = require("express").Router();
const controller = require("../controllers/shopProfilePageCtrl");

router.post("/postHistoryEntry", controller.postHistoryEntry);
router.post("/postReviewEntry", controller.postReview);
module.exports = router;
