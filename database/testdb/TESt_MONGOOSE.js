// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');


// let repoSchema = mongoose.Schema({
//   username:string,
//   url:string,
//   dateofrecordcreation:date,
//   repo:string,
//   rating:number,
//   stargazers_count: number
// });

// let Repo = mongoose.model('Repo', repoSchema);




// let save = (callback) => {  // the callback should accept the repos and then send the response back to the user
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB

// }
////////////////////////     SAVE CODE IS ABOVE ///////////////////////////////

var mongoose = require('mongoose');

var Author = require('./author.schema');
var Book = require('./book.schema');
var User = require('./user.schema');
var Customer = require('./customer.schema');

mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    if (err) throw err;

    console.log('Successfully connected');

var createUser = function(username, password){
    var newUser = new User({
        _id: new mongoose.Types.ObjectId(),
         username: username,
         password: password
    })
    newUser.save(function(err) {
        if (err) throw err;
        console.log('user successfully saved.');
    });
}
createUser ('glenntest===1','pass===1');

var createCustomer = function(name, address, phone, email, projectId){
    var newCustomer = new Customer({
     _id: new mongoose.Schema.Types.ObjectId(),
        name: name,
        address: address,
        phone: phone,
        email: email
    });
    newCustomer.save(function(err) {
        if (err) throw err;
        console.log('customer successfully saved.');
    });
}



var c1 = {name: 'glenn1', address:'1111 easy street', phone:'1234567', email:'glenn@amaranthgroup.com', projectId:11111};
createCustomer(c1.name,
    c1.address,
    c1.phone,
    c1.email,
    c1.projectId);


    var jamieAuthor = new Author({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: 'Jamie',
            lastName: 'Munro'
        },
        biography: 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.',
        twitter: 'https://twitter.com/endyourif',
        facebook: 'https://www.facebook.com/End-Your-If-194251957252562/'
    });

    jamieAuthor.save(function(err) {
        if (err) throw err;

        console.log('Author successfully saved.');

        var mvcBook = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: 'ASP.NET MVC 5 with Bootstrap and Knockout.js',
            author: jamieAuthor._id,
            ratings:[{
                summary: 'Great read'
            }]
        });

        mvcBook.save(function(err) {
            if (err) throw err;

            console.log('Book successfully saved.');
        });

        var knockoutBook = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: 'Knockout.js: Building Dynamic Client-Side Web Applications',
            author: jamieAuthor._id
        });

        knockoutBook.save(function(err) {
            if (err) throw err;

            console.log('Book successfully saved.');
        });
    });
});

//  TO TEST THIS:
// in terminal:
//  mongo
//   show dbs
//    use mongo_basic
//      db.authors().find()
//      db.books().find()
//
////module.exports.save = save;