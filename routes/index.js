const express = require("express");
const { Router } = express;
const { getAllMessages } = require("../controllers/messageController");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);

module.exports = { indexRouter };
