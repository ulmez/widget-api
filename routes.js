const {Router} = require('express');
const ApiController = require('./controllers/ApiController');

const router = Router();

router.post("/api/ratios",   ApiController.getRatios);
router.get("/widget/ratios",   ApiController.getWidgetRatios);

module.exports = router;
