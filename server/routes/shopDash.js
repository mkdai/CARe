const router = require("express").Router();
const controller = require("../controllers/shopDashCtrl");

<<<<<<< HEAD
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
=======
router.get("/getCalendar/:id", controller.getCalendar);
router.post("/createCalendar/:id", controller.createCalendar);
router.put("/storeCalendar/:id", controller.storeCalendar);
router.delete("/deleteCalendar/:id", controller.deleteCalendar);

module.exports = router;
>>>>>>> Render timekit logic on server side
