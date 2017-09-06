const router = require("express").Router();
const controller = require("../controllers/shopDashCtrl");

<<<<<<< HEAD
router.get("/getShopId", controller.getShopId);
router.get("/getCalendar", controller.getCalendar);
router.post("/createCalendar", controller.createCalendar);
router.delete("/deleteCalendar", controller.deleteCalendar);

module.exports = router;
=======
router.get("/getCalendar", controller.getCalendar);
router.post("createCalendar", controller.createCalendar);
router.put("/updateCalendar", controller.updateCalendar);
router.delete("/deleteCalendar", controller.deleteCalendar);
>>>>>>> create axios routes and controller
