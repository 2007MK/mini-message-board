const express = require("express");
const { messages } = require("./index");
const { Router } = express;

const router = Router();

router.get("/", (req, res) => {
  res.render("form");
});

router.post("/", (req, res) => {
  const { message, user } = req.body;
  messages.push({ text: message, user: user, added: new Date() });
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
