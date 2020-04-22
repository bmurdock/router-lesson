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
app.use(express.static('public'));

// Define the view engine
app.set('view engine', 'ejs');

// Routing information goes here
app.use('/people', peopleRouter);

app.get('/pug', (req, res, next) => {
    res.render('index', {
        title: 'Hello!',
        message: 'Whatever message I want.'
    });
});

app.get('/test', (req, res, next) => {
    res.render('index', {
        title: 'Different',
        message: 'Some other message'
    });
})

app.get('/about', (req, res, next) => {
    res.render('about', {
        message: "This is my message",
        stats: {
            score: 1,
            avg: 3
        },
        point: "This should be bold!"
    });
})

// Tell the application to start listening for requests
app.listen(port, (err) => {
    if (err) {
        console.log('Error launching app: ', err);
    }
    console.log(`${appName} listening on port ${port}...`);
});