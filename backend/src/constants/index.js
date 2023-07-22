"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var OpenApiValidator = require("express-openapi-validator");
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = process.env.PORT;
app.use(OpenApiValidator.middleware({
    apiSpec: "../../../openapi.yaml",
    validateRequests: true,
    validateResponses: true,
}));
app.get("/", function (req, res) {
    console.log("running get /");
    res.send(test);
    res.send("Express + TypeScript Server is Built!!");
});
app.listen(5000, function () {
    console.log("Example app listening on port 5000!");
});
app.get("/samples", function (req, res) {
    console.log("running get /sample");
    res.send("Here's samples get roots");
});
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:".concat(port));
});
// app.post("/samples", function (req, res, next) {
//   console.log("Here's samples post roots");
// });
app.use(function (err, req, res, next) {
    console.log("running here");
    // format error
    res.status(500).json({
        message: err.message,
        errors: err.errors,
    });
});
