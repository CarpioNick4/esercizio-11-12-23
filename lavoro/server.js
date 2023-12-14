const express = require('express');
const app = express();
const path = require('path')


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'home.html'))
});

app.get('/c_barca', function(req, res){
    res.sendFile(path.join(__dirname, 'c_barca.html'))
});

app.get('/c_madrid', function(req, res){
    res.sendFile(path.join(__dirname, 'c_madrid.html'))
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
});