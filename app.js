const path = require("path");
const express = require("express");

const app = express();

const abbreviationRouter = require("./routes/abbreviationRotes");
const viewRouter = require("./routes/viewRoutes");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use((req, res, next) => {
  console.log(req.body);
  next();
});
app.use("/", viewRouter);

app.use("/api/v1/abbreviations", abbreviationRouter);

module.exports = app;
