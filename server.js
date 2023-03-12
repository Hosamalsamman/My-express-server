//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello, world!</h1>");
});

app.get("/about", function(req, res){
    res.send("<h1>Name: Hossam</h1><p>Tel: +201121377684</p>");
});

app.get("/hobbies", function(req, res){
    res.send("<h1>Football and chess</h1>");
});

app.listen(3000, function (){
    console.log("server started on port 3000");
});