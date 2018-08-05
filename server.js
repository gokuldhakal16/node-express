const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Mongoose Database Connection
mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

// Check connection
db.on('connected', () => {
    console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', (err) => {
    console.log(err);
});

// Init App
const app = express()

// bring in Models
let Article = require('./model/article');

// PORT
const port = 3000

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

// Home Route
app.get('/', (req, res) =>
    Article.find({}, (err, articles) => {
        res.render('index',{
            articles: articles
        })
    })
);

// Add article Route
app.get('/articles/add', (req, res) =>
    res.render('add_articles', {
        name: 'Article'
    })
)

// Start Server
app.listen(port, () =>
    console.log("Connected on port " + port)
)