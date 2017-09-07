const router = require("express").Router();
const controller = require("../controllers/shopDashCtrl");

router.get("/getShopId", controller.getShopId);
router.get("/getCalendar/:id", controller.getCalendar);
router.post("/createCalendar/:id", controller.createCalendar);
router.put("/storeCalendar/:id", controller.storeCalendar);
router.delete("/deleteCalendar/:id", controller.deleteCalendar);

module.exports = router;
