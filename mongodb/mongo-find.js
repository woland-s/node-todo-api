const mongoose = require('mongoose');

const MongoClient = require('mongodb').MongoClient;

mongoose.connect( 'mongodb+srv://mari:mari123@cluster0-ecwhs.mongodb.net/test?retryWrites=true&w=majority' , { useNewUrlParser: true } , (err,db) =>  {
  if (err) {
    return console.log('error');

  }
    console.log('connected ')  ;

  // db.collection('Todos').find().toArray().then((docs) => {
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,23));
  // }, (err) =>{
    // console.log('unsble',err);
  // });

db.collection('Users').find({name: 'mari'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined ,2)) ;
});

//}


  //db.close();
 });
  