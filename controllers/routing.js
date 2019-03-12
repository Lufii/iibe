module.exports = {

  createPerson: (req, res) => {
    db.collection('people').insertOne(req.body, (err, result) => {
      if (err) return console.log(err);
      console.log('Saved person to DB')
      res.json(result);
    })
  },

  getPeople: (req, res) => {
    if(req.body.name==undefined){
    db.collection('people').find().toArray(  function(err, result){
      console.log(result);
      res.json(result);
    })}
    else{
      db.collection('people').find({name:req.body.name}).toArray( function(err, result){
        console.log(result);
        res.json(result);
    })
  }

  },

  editPerson: (req,res) => {
    db.collection('people').updateOne({'id':parseInt(req.body.id), 'name':req.body.name, 'username':req.body.username, 'email':req.body.email, 'phone':req.body.phone}, {
      $set: {
      "id":req.body.nid,
      "name":req.body.nname,
      "username":req.body.nusername,
      "email":req.body.nemail,
      "address":{
        "street": req.body.nstreet,
        "suite": req.body.nsuite,
        "city": req.body.ncity,
      "zipcode": req.body.nzipcode,
      "geo": {
        "lat": req.body.nlat,
        "lng": req.body.nlng,
      }
    },
    "phone": req.body.nphone,
    "website": req.body.nwebsite,
    "company": {
      "name": req.body.ncompanyname,
      "catchPhrase": req.body.ncatchphrase,
      "bs": req.body.nbs,
    }
  }
    },
    (err, result) => {
      if (err) return console.log(err);
      console.log('Person updated', result);
      res.json(result);
    })
  },



  deletePerson: (req,res) => {
    db.collection('people').deleteOne({
    'id':parseInt(req.body.id),
    'name':req.body.name,
    'username':req.body.username,
    'email':req.body.email,
    'phone':req.body.phone
    }, (err, result) => {
      if (err) return console.log(err);
      console.log('Deleted person from DB', result);
      res.json(result);
    })
  }
}
