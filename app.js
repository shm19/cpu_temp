const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const cpuRouter = require("./routes/cpuRoutes");

dotenv.config({ path: path.join(__dirname, "config.env") });

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: "10kb" }));

app.use("", (req, res, next) => {
  req.requestedAt = `${new Date().toLocaleTimeString()} - ${new Date().toLocaleDateString()}}`;
  next();
});

app.use("/api/v1/cpus", cpuRouter);

// INVALID URL HANDLER
app.all("*", (req, res, next) =>
  res.status(404).json({
    status: "fail",
    message: `Can't find any routes for ${req.originalUrl} on server`,
  })
);

module.exports = app;
