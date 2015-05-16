'use strict';

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('app'));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 8000, function(err){
  if(err){
    console.log(err);
  }
  console.log('Server Started on port 8000');
});
