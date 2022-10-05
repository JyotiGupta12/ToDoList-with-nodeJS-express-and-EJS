//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
var item;
var itemList = ["cook food", "finish dishes"]
var workItems = ["prepare lessons"]
app.get("/", function(req, res){
    var today = new Date()
    var options ={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day = today.toLocaleDateString("en-US", options);
    res.render("index", {listTitle:day, newListItem:itemList});
});


app.post("/", function(req, res){
    item = req.body.newItem;
    console.log(req.body);
    if (req.body.list === "Work"){
        workItems.push(item)
        res.redirect("/work")
    }
    else{itemList.push(item)
        res.redirect("/")
    }
})

app.get("/work", function(req,res){
    res.render("index", {listTitle:"Work List",newListItem:workItems})
})
app.get("/about", function(req,res){
    res.render("about")
})


app.listen(3000, function(){
    console.log("server has started on server 3000")
});
