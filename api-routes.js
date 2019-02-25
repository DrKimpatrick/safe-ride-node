// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', (req, res) => {
    res.json({
        status: 'API is working',
        message: 'Welcome to Safe-ride an API written in Node'
    });
});

// export API routes
module.exports = router;