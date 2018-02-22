// TODO: UNCOMMENT THIS CODE WHEN READY TO CONNECT TO MONGOOSE (lines 3 to 12`)
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',{useMongoClient: true});

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});







//  THIS IS OLD EXAMPLE CODE THAT SHOULD BE DELETED, FOR EXAMPLE ONLY
// var itemSchema = mongoose.Schema({
//   quantity: Number,
//   description: String
// },{collection:'item'});

// var Item = mongoose.model('Item', itemSchema);

// var selectAll = function(callback) {
//   // Item.find({}, function(err, items) {
//   //   if(err) {
//   //     callback(err, null);
//   //   } else {
//   //     callback(null, items);
//   //   }
//   // });
//    // var item = new Item({
//    //  quantity: 200,
//    //  description: 'I am a description!'
//    // });

//    // item.save(() => {
//       Item.find({}, function(err,items){
//         if(err) {
//           callback(err, null);
//         } else {
//           callback(null, items);
//         }
//      });
//    // });


// };
// var save = function(data){
//   console.log('database mongo---save routine', data);
//   var item = new Item({
//       quantity: 200,
//       description: data.description
//   });
//   item.save(function(err) {
//     if (err) throw err;
//     console.log('Book successfully saved.');
//   });
// }
//module.exports.save = save;

//module.exports.selectAll = selectAll;

// UNCOMMENT TO TEST SELECTALL
// module.exports.selectAll(function(err, data){
//   console.log(err);
//   console.log(data);
// })