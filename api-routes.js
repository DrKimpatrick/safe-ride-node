// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', (req, res) => {
    res.json({
        status: 'API is working',
        message: 'Welcome to Safe-ride an API written in Node'
    });
});

// import Auth controllers
let authControllers = require('./authControllers');

// Auth routes
router.route('/users')
    .get(authControllers.index); // retrievs all users
router.route('/signup')
    .post(authControllers.signup); // creates new user account
router.route('/user/:id/profile')
    .get(authControllers.userProfile); // retrieve user profile


// export API routes
module.exports = router;