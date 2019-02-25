// import express
let express = require('express');

// Initialize the app
let app = express();

// Setup server port
let port = process.env.PORT || 8000;

// import routes
let apiRoutes = require('./api-routes');

// send message with default URL
app.get('/', (req, res, next) => res.send('Hello, welcome to Carpool API written in node'));

// use API routes in the app
app.use('/api', apiRoutes)

// Launch app to listen to a specific port
app.listen(port, () => console.log(`Running Safe-ride on port ${port}`))