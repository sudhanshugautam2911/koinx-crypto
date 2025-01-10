const express = require("express");
const router = express.Router();
const { getCryptoStats } = require("../controllers/statsController");

router.get("/", getCryptoStats);

module.exports = router;
