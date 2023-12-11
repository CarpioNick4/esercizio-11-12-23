var express = require('express');
var app = express(); 
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, 'index.html'));
   });   
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
app.get('/calciatori',function(req,res){
    res.sendFile(path.join(__dirname,'calciatori.html')); //__dirname : Ritorna la cartella del progetto
});
app.get('/cr7',function(req,res){
    res.sendFile(path.join(__dirname,'cr7.html')); //__dirname : Ritorna la cartella del progetto
});