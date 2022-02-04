// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

const express = require('express');
const logger = require("morgan");
const path = require("path");


// ℹ️ Connects to the database
require('./config/db.configdb');
app.use(logger('dev'));


const cookieParser = require("cookie-parser");
const favicon = require("serve-favicon");


// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');

const app = express();

 // Normalizes the path to the views folder
 app.set("views", path.join(__dirname, "..", "views"));
 // Sets the view engine to handlebars
 app.set("view engine", "hbs");
 // Handles access to the public folder
 app.use(express.static(path.join(__dirname, "..", "public")));

 // Handles access to the favicon
 app.use(favicon(path.join(__dirname, "..", "public", "images", "favicon.ico")));

 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 app.use(cookieParser());


// default value for title local
const projectName = 'lab-movies-celebrities';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
const routes = require('./config/routes.config');
app.use('/', routes);



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
app.use((req, res, next) => {
    // this middleware runs whenever requested page is not available
    res.status(404).render("errors/not-found");
  });

  app.use((err, req, res, next) => {
    // whenever you call next(err), this middleware will handle the error
    // always logs the error
    console.error("ERROR", req.method, req.path, err);

    // only render if the error ocurred before sending the response
    if (!res.headersSent) {
      res.status(500).render("/errors/error");
    }
  });

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
