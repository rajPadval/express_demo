const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs')

// const staticPath = path.join(__dirname, "/public"); //getting the path of the static folde
// console.log(path.join(__dirname,'/public'));
app.use('/css',express.static(path.join(__dirname,'/public/styles/')))
const partials_path = path.join(__dirname,'/views/partials')
app.set("view engine",'hbs')
hbs.registerPartials(partials_path)
// app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
// const userRouter = require("./routes/router");
// app.use("/views", userRouter);
app.listen(3000, console.log("Server running sucessfully at port 3000"));
