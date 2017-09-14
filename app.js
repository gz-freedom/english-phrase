const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
var db;

MongoClient.connect('mongodb://127.0.0.1:27017/phrase', (err, database) => {
    if(err) return console.log(err);
    db = database;
    app.listen(3000, () => {
        console.log("listening on 3000");
    });
});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    db.collection('phrases').find().toArray((err, result) => {
        if(err) return console.log(err);
        res.render('index.ejs', { phrases: result });
    });
});
app.get('/add-phrase', (req, res) => {
    res.render('add-phrase.ejs');
});

app.post('/phrase', (req, res) => {
    db.collection('phrases').save(req.body, (err, result) => {
        if(err) return console.log(err);

        console.log('saved to database');
        res.redirect('/');
    });
});