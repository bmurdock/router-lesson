// Import necessary dependencies
const express = require('express');

const router = express.Router();

const people = [{
    name: 'Brian'
}, {
    name: 'Alice'
}, {
    name: 'Sarah'
}, {
    name: 'Allen'
}];



// This is the router-specific middleware stuff
router.use((req, res, next) => {
    console.log('This is using a "people" base route...');
    next();
});

router.param('id', (req, res, next, id) => {
    const index = parseInt(id);
    if (isNaN(index) || index > people.length) {
        res.send('Invalid person index.');
        return;
    }
    const person = people[index];
    req.person = person;
    next();
});


// These are the actual routes
router.get('/', (req, res, next) => {
    console.log(Math.random());
    const name = "brian"
    res.json(people);
});

router.get('/pages', (req, res, next) => {
    res.send('You have reached the people pages.');
});

router.get('/person/:id', (req, res, next) => {
    res.json(req.person);
});

module.exports = router;