const express = require("express");
const { healthCheck } = require("./routes/healthCheck");

const router = express.Router();

// implement health check route
router.get("/", healthCheck);

module.exports = router;
