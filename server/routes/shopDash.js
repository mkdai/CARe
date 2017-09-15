const router = require("express").Router();
const controller = require("../controllers/shopDashCtrl");

router.get("/getShopId", controller.getShopId);
router.get("/getCalId", controller.getCalId);
router.get("/getCalendar", controller.getCalendar);
router.post("/createCalendar", controller.createCalendar);
router.delete("/deleteCalendar", controller.deleteCalendar);
router.get("/getCar/:id", controller.getCar);
router.put("/setServices/:id/:services", controller.setServices);
router.get("/getServices/:id", controller.getServices);
router.put("/updateHours", controller.updateHours);
router.delete("/removeAppointment", controller.removeAppointment);
module.exports = router;
