const express = require("express");
var router = express.Router();

router.get("/test", async (req, res, next) => {
  res.send("hello world text worked ");
});
router.post("/test", async (req, res, next) => {
  res.send("Post was executed ");
});

module.exports = router;
