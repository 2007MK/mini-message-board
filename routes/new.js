const express = require("express");
const { Router } = express;

const { postMessage } = require("../controllers/messageController");

const router = Router();

router.get("/", (req, res) => {
  res.render("form");
});

router.post("/", postMessage);

module.exports = router;
