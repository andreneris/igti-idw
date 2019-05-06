var express = require ('express')
// import express from express;
var app = express();

app.use('/',express.static('public'))

app.listen(process.env.PORT || 3000, function(){
    console.log("Excemple app listen on port 3000")
})