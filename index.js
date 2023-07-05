const express = require('express');
const layouts = require("express-ejs-layouts");
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const app = express();

app.use(express.static("public"));
app.use(layouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const PORT = process.env.PORT || 8080;


//routers
//get
app.get("/", homeController.respondForHomePage);
app.get("/index", homeController.respondForHomePage);
app.get("/about", homeController.respondForAbout);
app.get("/contact", homeController.respondForContact);
app.get("/events", homeController.respondForEvents);
app.get("/jobs", homeController.respondForJobs);

//error handling
app.use(errorController.respondInternalError);
app.use(errorController.respondSourceNotFound);

//port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
