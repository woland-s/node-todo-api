const mongoose = require('mongoose');

const MongoClient = require('mongodb').MongoClient;
// meorevarianti----->  const {MongoClient} = require('mongodb); //

 var user = {name: 'mari' , age:23};
 var {name} = user;
console.log(name);


//meore varianti//
//     var obj = new ObjectID();
//     console.log(obj); 
//


mongoose.connect( 'mongodb+srv://mari:mari123@cluster0-ecwhs.mongodb.net/test?retryWrites=true&w=majority' , { useNewUrlParser: true } , (err,db) => {
  if (err) {
    return console.log('error');

  }
  console.log('connected ') ;


  db.collection('Todos').insertOne
  ({
   
    text:'rame gaaketos' ,
    name: 'mari',
    completed:false 
  }, (err,result) => {
    if (err) {
    return console.log('unable instert Todos') }
  
     console.log(JSON.stringify (result.ops) , undefined, 2);
    
     console.log(result.ops[0]._id.getTimestamp());
  });


  db.close();
}) ;