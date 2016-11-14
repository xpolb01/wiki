const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/wiki');
var models = require('./models');
const nunjucks = require('nunjucks');
//const fs = require('fs');
//const path = require('path');
//const mime = require('mime');
//const socketio = require('socket.io');

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views/',{ noCache: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use('/wiki', router);

models.User.sync({})
.then(function () {
    return models.Page.sync({});
})
.then(function () {
    app.listen(3001, function () {
        console.log('Server is listening on port 3001!');
    });
})
.catch(console.error);