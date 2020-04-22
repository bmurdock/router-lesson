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
    console.log('params:', req.params);
    const person = people[Number(req.params.id)];
    console.log(person);
    res.json(person);
});

module.exports = router;