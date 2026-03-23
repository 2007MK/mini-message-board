const express = require("express");
const { indexRouter } = require("./routes/index");
const newRouter = require("./routes/new");
const app = express();

// to parse the form data properly
app.use(express.urlencoded({ extended: true }));

// setup view engine
app.set("view engine", "ejs");

// setup routes
app.use("/", indexRouter);
app.use("/new", newRouter);

// listen
app.listen(3000, (error) => {
  if (error) throw error;
  console.log("Server Started Succesfully");
});
