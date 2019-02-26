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
exports.userProfile = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) return next(err);
        res.json({
            status: 'Success',
            data: user
        })
    })
};

// update user data
exports.updateProfile = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err)
            res.json(err)
        user.email = req.body.email ? req.body.email: user.email;
        user.fullname = req.body.fullname ? req.body.fullname: user.fullname;
        user.username = req.body.username ? req.body.username: user.username;
        
        // update the profile and check for errors
        user.save((err) => {
            if (err)
                res.json(err);

            res.json({
                status: 'Success',
                message: 'Successfully updated user profile',
                data: user
            });
        });
            
    });
}


exports.deleteProfile = (req, res) => {
    User.remove({_id: req.params.id}, (err) => {
        if (err)
            res.json(err)

        res.json({
            status: 'Success',
            message: 'User profile deleted !'
        })
    })
}