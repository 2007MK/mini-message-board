const { Client } = require("pg");

const sql = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR,
message TEXT,
added TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);


INSERT INTO messages (name, message)
VALUES 
('User 1', 'Hello World!'),
('User 2', 'Hi There!');
`;

async function main() {
  console.log("seeding...");
  const url = process.argv[2];
  if (!url) {
    console.error("No DB URL entered");
    process.exit(1);
  }

  const client = new Client({ connectionString: url });
  await client.connect();
  await client.query(sql);
  await client.end();
  console.log("done");
}

main();
