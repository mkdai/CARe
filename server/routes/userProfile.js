const router = require("express").Router();
const controller = require("../controllers/userProfilePageCtrl");

router.put("/updateProfile/:id", controller.updateProfile);
router.get("/getProfile/:id", controller.getProfile);
router.post("/addCar/:id", controller.addCar);
router.get("/getAllUserCars/:userId", controller.getAllUserCars);
router.get("/getUserFavorites/:id", controller.getUserFavorites);
router.get("/getUserReviews/:id", controller.getUserReviews);
router.get("/getAllReviews/:userId", controller.getAllReviews);
router.get("/getUserReminders/:id", controller.getUserReminders);
router.post("/createReminder/:id", controller.createReminder);

module.exports = router;
