//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');


// initializes express
const app = express();

//initializes body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//serves homepage
require('./routes/routes.js')(app);


//Connects to my mongodb and logs status.
MongoClient.connect('mongodb://1PlutoArtemis:1PlutoArtemis@ds149894.mlab.com:49894/iidb', { useNewUrlParser: true }, (err, client) =>{
  if(err) return console.log(err);
  db = client.db('iidb');
  app.listen(72, function(){
  console.log('Ignition, port 72');
  })
})
