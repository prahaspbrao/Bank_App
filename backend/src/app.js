const express = require("express")
const app = express()
const NotFoundError = require("./middlewares/404handling.js");
const ApiError = require("./utils/ApiError.js");

app.use(express.json({}))

app.use("/api/v1" , require("./router"))

app.get("/" , (req , res)=>{
    res.send("Hello world!!")
});

app.use("", (req , res ,next)=>{
    next(new ApiError(404 , "Not found!!"));
});

app.use(NotFoundError);


module.exports = app;