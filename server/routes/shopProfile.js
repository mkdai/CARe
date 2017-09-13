const router = require("express").Router();
const controller = require("../controllers/shopProfilePageCtrl");

router.get("/getBookings", controller.getBookings);
router.get("/getAppointments", controller.getAppointments);
router.post("/postHistoryEntry", controller.postHistoryEntry);
router.post("/postReviewEntry", controller.postReview);
router.post("/favorite", controller.postFavorite);
router.delete("/favorite", controller.deleteFavorite);
router.post("/postAppointment", controller.postAppointment);
router.post("/claimShop", controller.claimShop);

module.exports = router;
