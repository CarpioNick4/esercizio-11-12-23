var express = require('express');
const path = require('path');
var app = express(); 
  
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, 'index.html'));
   }); 
app.get('/r_Madrid',function(req,res){
    res.sendFile(path.join(__dirname,'c_real.html')); //__dirname : Ritorna la cartella del progetto
});
app.get('/barca',function(req,res){
    res.sendFile(path.join(__dirname,'c_barca.html')); //__dirname : Ritorna la cartella del progetto
});