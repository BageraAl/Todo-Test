const express = require('express');
const routes = require('./routes/todo');
const db = require('./infrastructure/database/mongo');
const bodyparser = require('body-parser');
const { mongo } = require('mongoose');
const app = express();
const port =3000;
app.use(bodyparser.json())
app.use(routes);
db.connectDb();
const server = app.listen(3000);


