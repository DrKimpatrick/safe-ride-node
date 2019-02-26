// import authModel
let User = require('./authModels');

// Retrieve all users in the db
exports.index = (req, res) => {
    User.get((err, users) => {
        if(err){
            res.json({
                status: 'error',
                message: err
            })
        }

        res.json({
            status: 'Success',
            message: 'Users retrieved successfully',
            data: users
        })
            
    })
}

// Handle signup
exports.signup = (req, res) => {
    let user = new User(req.body);

    user.save((err) => {
        if (err)
            res.json(err);
        res.json({
            message: 'User account successfully created!',
            data: user
        })

    })
}

// user details
exports.userProfile = function (req, res) {
    User.findById(req.params.id, (err, user) => {
        if (err) return next(err);
        res.json({
            status: 'Success',
            data: user
        })
    })
};