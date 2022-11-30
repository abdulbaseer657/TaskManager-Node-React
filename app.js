const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { render } = require("ejs");
const blogRoutes = require("./routes/blogroutes");
//express app
const app = express();
// connect to mongodb

const dburi =
  "mongodb+srv://mab:temp1234@nodelearn.ttlxgol.mongodb.net/nodelearn?retryWrites=true&w=majority";
mongoose
  .connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected to DB"))
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

//listen for req
app.listen(3000);
//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// basic routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});
app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});
//redirects
app.get("./aboutus", (req, res) => {
  res.redirect("/about", { title: "about" });
});
//blog routes
app.use(blogRoutes);
//404 redirect
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
