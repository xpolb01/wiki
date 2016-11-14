const express = require('express');
const app = express();
const morgan = require('morgan');
//const nunjucks = require('nunjucks');
//const makesRouter = require('./routes');
//const fs = require('fs');
//const path = require('path');
//const mime = require('mime');
const bodyParser = require('body-parser');
//const socketio = require('socket.io');
var models = require('./models');

app.use(morgan);



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