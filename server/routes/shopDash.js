const router = require("express").Router();
const controller = require("../controllers/shopDashCtrl");

router.get("/getCalendar", controller.getCalendar);
router.post("createCalendar", controller.createCalendar);
router.put("/updateCalendar", controller.updateCalendar);
router.delete("/deleteCalendar", controller.deleteCalendar);
