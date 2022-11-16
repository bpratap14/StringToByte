const dotenv = require("dotenv");
dotenv.config({
  path: ".env"
});
const bodyParser = require("body-parser");
const logger = require("morgan");
var express = require("express");
var app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(logger("dev"));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // *.domain.com update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR"
    );
    res.header("Access-Control-Expose-Headers", "Token");
  
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }
  
    next();
  });

//Routes

var commonRouter = require("./routes/common");

//user routes
app.use("/common", commonRouter);



  app.start = app.listen = function () {
    return server.listen.apply(server, arguments);
  };




module.exports = app;