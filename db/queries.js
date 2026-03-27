const pool = require("./pool.js");

async function getMessage(id) {
  if (id) {
    const { rows } = await pool.query(`SELECT * FROM messages WHERE id = $1`, [
      id,
    ]);
    return rows[0];
  }

  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}

async function postMessage({ message, name }) {
  await pool.query("INSERT INTO messages (name, message) VALUES ($1, $2)", [
    name,
    message,
  ]);
}

module.exports = { getMessage, postMessage };
