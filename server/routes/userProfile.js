const router = require("express").Router();
const controller = require("../controllers/userProfilePageCtrl");

router.put("/updateProfile/:id", controller.updateProfile);
router.get("/getProfile/:id", controller.getProfile);

module.exports = router;
