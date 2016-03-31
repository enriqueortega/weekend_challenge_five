var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

app.set("port", (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Connecting to Mongoose
mongoose.connect('mongodb://localhost/pet_application');
mongoose.model("Pet", new Schema({"name" : String, "type" : String, "age" : Number, "imageUrl" : String}));
var Animal = mongoose.model("Pet");

//DB STUFF


//Get from DB
app.get("/pets", function(req,res){
    Animal.find({},function(err, data){
      if(err){
        console.log(err);
      }
      res.send(data); // Get data
    });
});

// Post to DB
app.post("/pets", function(req,res){
    var addedAnimal = new Animal({"name" : req.body.name, "type" : req.body.type, "age" : req.body.age, "imageUrl" : req.body.imageUrl});
    addedAnimal.save(function(err, data){
      if(err){
        console.log(err);
      }
      console.log('req body', req.body);
      console.log('data', data);
      res.send(data);
    });
});

app.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Yo Yo Yo, we're tuning in to port: 5000");
});

module.exports = app;
