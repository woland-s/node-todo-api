const express = require('express');
var app = express();
app.get('/' , (req,res) => {

  res.status(404).send( {
    error: 'page not found' ,
    name: 'todo app v1.0'
  });
});
app.listen(6000);
module.exports.app = app;