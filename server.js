//* Imports/Configs and Variables
require("dotenv").config();
const express = require("express");
const connectTodb = require("./config/db");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
const Log = require("./models/logs");

//* Jsx view engine
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//* Middleware
app.use(express.urlencoded({ extended: false }));

//* app .use method override for the delete
app.use(methodOverride("_method"));

//* Routes
app.get("/", (req, res) => {
  res.redirect('/logs');
});

app.get("/logs", (req, res) => {
  Log.find({}, (error, allLogs) => {
    res.render("Index", { logs: allLogs });
  });
});

app.get("/createlog", (req, res) => {
  res.render("New");
});

app.post("/logs", (req, res) => {
  console.log(req.body);
  Log.create(req.body, (err, createdLog) => {
    res.redirect("/logs");
  });
});

app.get("/logs/:id", (req, res) => {
  console.log(req.params);
  Log.findById(req.params.id, (err, foundLog) => {
    res.render("Show", { log: foundLog });
  });
});

app.get("/logs/:id/edit", (req, res) => {
  Log.findById(req.params.id, (error, foundLog) => {
    !error
      ? res.render("Edit", { log: foundLog })
      : res.send({ msg: error.message });
  });
});

app.put("/logs/:id", (req, res) => {
  req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
  Log.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedLog) => {
      res.redirect(`/logs/`);
    }
  );
});

app.delete("/logs/:id", (req, res) => {
  Log.findByIdAndRemove(req.params.id, (error, deletedFruit) => {
    res.redirect("/logs");
  });
});

// })

//* Listening port
app.listen(3000, () => {
  console.log("server is up");
  connectTodb();
});