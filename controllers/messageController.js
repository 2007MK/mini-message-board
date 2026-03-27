const db = require("../db/queries");

async function getAllMessages(req, res) {
  const messages = await db.getMessage();
  res.render("index", { messages });
}

async function getMessage(req, res) {
  const { id } = req.params;
  const message = await db.getMessage(id);

  if (!message) {
    return res.send("Message not found");
  }

  res.render("details", { message });
}

async function postMessage(req, res) {
  const { message, name } = req.body;
  await db.postMessage({ message, name });
  res.redirect("/");
}

module.exports = {
  getAllMessages,
  getMessage,
  postMessage,
};
