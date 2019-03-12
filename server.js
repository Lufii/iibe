//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const cors = require('cors');

// initializes express
const app = express();
app.use(cors());
//initializes body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//serves homepage
require('./routes/routes.js')(app);


//Connects to my mongodb and logs status.
MongoClient.connect('mongodb://1PlutoArtemis:1PlutoArtemis@ds149894.mlab.com:49894/iidb', { useNewUrlParser: true }, (err, client) =>{
  if(err) return console.log(err);
  db = client.db('iidb');
  app.listen(process.env.PORT || 0.0.0.0 || 72, function(){
  console.log('Ignition, port 72');
  })
})
