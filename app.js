require("dotenv").config();

const express = require("express");
const path = require("path");
const { indexRouter } = require("./routes/index");
const newRouter = require("./routes/new");
const detailsRouter = require("./routes/details");
const app = express();

// to parse the form data properly
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// setup view engine
app.set("view engine", "ejs");

// setup routes
app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/details", detailsRouter);

// listen
app.listen(3000, (error) => {
  if (error) throw error;
  console.log("Server Started Succesfully");
});
