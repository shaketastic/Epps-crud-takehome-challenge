// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIG
const app = express();

// TODO: Add application-wide middleware
app.use(cors());
app.use(express.json()); // parse JSON

// TODO: Add controller(s)
const applicationController = require("./controllers/applicationController");
const { handleError, handleNotFound } = require("./middleware/errorMiddleware");

// TODO: Implement health check route
const healthCheck = require("./routes/healthCheck");
app.use("/health", healthCheck);

// app controller
app.use("/applications", applicationController);

app.use(handleError);
app.use(handleNotFound);

module.exports = app;

// Resources:
// - https://www.geeksforgeeks.org/rest-api-using-the-express-to-perform-crud-create-read-update-delete/
// - https://medium.com/@rachealkuranchie/how-to-build-a-crud-api-with-express-js-and-typescript-21c7c66e5296
// - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
// - https://expressjs.com/en/guide/error-handling.html
