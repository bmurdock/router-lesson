// Import necessary dependencies
const express = require('express');
const peopleRouter = require('./routes/people.routes');

// Set up app constants
const port = 3030;
const appName = 'Express Router Demo App';

// Create the app "object"
const app = express();

// Middleware should go here
const logger = (req, res, next) => {
    console.log(req.method, req.path);
    next();
}

app.use(logger);

app.use(express.json());

// Routing information goes here
app.use('/people', peopleRouter);

app.get('/', (req, res, next) => {
    res.send('You made it.');
})

// Tell the application to start listening for requests
app.listen(port, (err) => {
    if (err) {
        console.log('Error launching app: ', err);
    }
    console.log(`${appName} listening on port ${port}...`);
});