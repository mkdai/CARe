const router = require("express").Router();
const controller = require("../controllers/userProfilePageCtrl");

router.put("/updateProfile/:id", controller.updateProfile);
router.get("/getProfile/:id", controller.getProfile);
router.post("/addCar/:id", controller.addCar);
router.get("/getAllUserCars/:userId", controller.getAllUserCars);

module.exports = router;
