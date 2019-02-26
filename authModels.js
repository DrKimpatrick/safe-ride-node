// import mongoose
let mongoose = require('mongoose');

// Setup schema
let Schema = mongoose.Schema;
let userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 100
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        default: null,
        unique: true,
        max: 10
    },
    fullname: {
        type: String,
        default: null,
        max: 20
    },
    created_date: {
        type: Date,
        default: Date.now
    }

})

// Export User model
let User = module.exports = mongoose.model('user', userSchema);

// this helps us when retrieving all records
// without this we get an error that User.get is not a function
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}