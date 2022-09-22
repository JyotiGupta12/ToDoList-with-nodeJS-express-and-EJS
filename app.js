//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.set("view engine", 'ejs');
app.get("/", function(req, res){
    // res.write("<p>today is Sunday</p>");
    // res.write("<p>You do not need to work</p>")
    // res.send()
    // res.sendFile(__dirname+"/index.html");
    res.render("index", {test:"hi"});
});


app.listen(3000, function(){
    console.log("server has started on server 3000")
});
