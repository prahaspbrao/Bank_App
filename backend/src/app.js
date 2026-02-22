const express = require("express");
const app = express();

const NotFoundError = require("./middlewares/404handling.js");
const ApiError = require("./utils/ApiError.js");

app.use(express.json());

// routes
app.use("/api/v1", require("./router"));

app.get("/", (req, res) => {
    res.send("Hello world!!");
});

// ✅ 404 catcher (NO PATH)
app.use((req, res, next) => {
    next(new ApiError(404, "Not found!!"));
});

// ✅ error handler
app.use(NotFoundError);

module.exports = app;