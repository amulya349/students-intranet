var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({

    data: {
        clgId        : String,
        attention : String,
        topic: String,
        text: String
    },
    timeStamp: String

});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Post', userSchema);
