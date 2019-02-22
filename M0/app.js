// jshint esversion:6
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();
const port = 3000;

// middleware
hbs.registerPartials(__dirname + 'views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// log
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = '${now}: ${req.method} ${req.url}';

  console.log();
  fs.appendFile('server.log', log + '\n');
  next();
});

// hbs helper function
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=> {
  return text.toUpperCase();
});

// homepae (index) routing
app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Software Engineering class SFSU',
    semesterYear: 'Spring 2019',
    section: '01',
    team: 'Team007',
  });
});

// about: Ratna Lama
app.get('/ratnalama', (req, res) => {
  res.render('ratnalama.hbs', {
    pageTitle: 'About Me: ',
  });
});

// about: Hadia Andar
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/hadiaandar.html');
});

// about: Adam Tremarche
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/adamtremarche.html');
});

// about: Andrew document.setAttribute('attr', value);rmiento
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/andrewsarmiento.html');
});

// about: Ade Adetayo
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/adeadetayo.html');
});

// about: Shuyuan Deng
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/shuyuandeng.html');
});

// listen from express module
app.listen(port, function () {
  console.log('App listening on port ' + port + ' ...');
});
