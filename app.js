const express = require("express");
const cors = require("cors");

const app = express();

// TODO: Add application-wide middleware
app.use(cors());
app.use(express.json()); // parse JSON

// TODO: Add controller(s)
const applicationController = require("./controllers/applicationController");
app.use("/applications", applicationController);

// TODO: Implement health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "Status is Okay" });
});

module.exports = app;

// Resources:
// - https://www.geeksforgeeks.org/rest-api-using-the-express-to-perform-crud-create-read-update-delete/
// - https://medium.com/@rachealkuranchie/how-to-build-a-crud-api-with-express-js-and-typescript-21c7c66e5296
// - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
