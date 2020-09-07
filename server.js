const express = require("express");
const app = express();
const itemsRouter = require('./routes/items');
const mongoose = require('mongoose');
const Item = require('./models/item');

mongoose.connect('mongodb://localhost/InventoryList',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
  });

app.use(express.json());
app.use('/list', itemsRouter);
app.listen(8080);