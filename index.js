const express = require("express");
const app = express();
const path = require('node:path');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'view'));

const viewRouter = require('./routes/ViewRoute');

app.use('/', viewRouter);

module.exports = app;
