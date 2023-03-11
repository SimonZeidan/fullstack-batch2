const express = require("express");
const router = express.Router();
const shortenerController = require("../controllers/shortenerController");


router.post("/shortener", shortenerController.shortenURL);
router.get("/:urlCode", shortenerController.redirectUrl);

module.exports = router;

