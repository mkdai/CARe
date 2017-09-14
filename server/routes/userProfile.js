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
router.get("/getMaintenanceHistory/:carId", controller.getMaintenanceHistory);
router.delete("/deleteReminder/:id", controller.deleteReminder);
router.put("/updateMileage/:id", controller.updateMileage);
router.delete("/deleteCar/:id", controller.deleteCar);
router.get("/getShop/:id", controller.getShop);
router.get("/getSingleCar/:id", controller.getSingleCar);
module.exports = router;
