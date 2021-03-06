const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { errorHandler, notFound } = require("./middlewares");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.json({
        message : "Welcome to community API"
    }
)});



app.use(notFound);
app.use(errorHandler);

module.exports = app;
