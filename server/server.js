// const { application } = require('express');
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

// import routers
const universeRouter = require("./routes/universe");
const drinksRouter = require("./routes/drinks");
const authRouter = require("./routes/auth");

const PORT = 3000;
const app = express();

// Parse Cookies into req.cookies object
app.use(cookieParser());

app.use(express.json());
// link to universe router
// app.use("/universe", universeRouter);
// link to drinks router
app.use("/drinks", drinksRouter);
// link to drinks router
app.use("/ing", universeRouter);
// link to authentication router
app.use("/auth", authRouter);

// serve static files
app.use(express.static(path.resolve(__dirname)));

app.get("/build.js", (req, res) => {
  console.log("here in sendfile /build");
  return res.sendFile(path.resolve(__dirname, "../build/build.js"));
});

// no favicon implement, just added to end an annoying error.
app.get("/favicon.ico", (req, res) => res.status(200));

app.get("/", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "../index.html"));
});

// 404 Handler
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
