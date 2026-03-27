const express = require("express");
const { Router } = express;
const { getMessage } = require("../controllers/messageController");

const detailsRouter = Router();

detailsRouter.get("/:id", getMessage);

module.exports = detailsRouter;
