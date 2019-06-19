const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req,res,next)  => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}` ;
console.log(log)
fs.appendFile('server.log' , log + '\n')
next();
});

hbs.registerHelper('getCurrentYear', () => {
return new Date().getFullYear()
});

hbs.registerHelper ('screamIt', (text) => {
return text.toUpperCase();
});
app.get('/', (req,res) => {
   res.render('home.hbs' , {
    pageTitle: 'home page',
    welcomeMessage: 'Welcome to my website' ,
    currentYear: new Date().getFullYear()
  });
  });



app.get('/about', (req,res) => {
res.render('about.hbs' , {
  pageTitle: 'about page',
  currentYear: new Date().getFullYear()
});
});



app.get('/bad', (req,res) => {
res.send ({
errorMessage: 'errors'
});

});



app.get('/',(req, res) => {
  res.send({
    name: 'mariami',
    likes: [
      'csGO',
      'food',
      'ku'
    ]
  });
});

app.listen(5000, () =>   {
console.log('server is up on port 5000');

});



