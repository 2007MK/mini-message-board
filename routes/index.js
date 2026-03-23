const express = require("express");
const { Router } = express;

const indexRouter = Router();

const messages = [
  {
    id: crypto.randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages });
});

module.exports = { indexRouter, messages };
