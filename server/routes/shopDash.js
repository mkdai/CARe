const router = require("express").Router();
const controller = require("../controllers/shopDashCtrl");

router.get("/getCalendar/:id", controller.getCalendar);
router.post("/createCalendar/:id", controller.createCalendar);
router.put("/updateCalendar/:id", controller.updateCalendar);
router.delete("/deleteCalendar/:id", controller.deleteCalendar);

module.exports = router;
