const express = require("express");
const { Router } = express;
const { messages } = require("../routes/index");

const detailsRouter = Router();

detailsRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  const message = messages.find((msg) => msg.id === id);

  if (!message) {
    return res.send("Message not found");
  }

  res.render("details", { message });
});

module.exports = detailsRouter;
