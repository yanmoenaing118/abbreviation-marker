const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();

const abbreviationRouter = require("./routes/abbreviationRotes");
const searchRouter = require("./routes/searchRoutes");
const viewRouter = require("./routes/viewRoutes");

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", viewRouter);

app.use("/api/v1/search", searchRouter);
app.use("/api/v1/abbreviations", abbreviationRouter);

module.exports = app;
