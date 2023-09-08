const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/animals', (err, db) => {
    if(err) throw err;

    db.collection('mammals')
      .find()
      .toArray((errr, res) => {
        if(errr) throw errr;
        console.log(res);
      });
});

