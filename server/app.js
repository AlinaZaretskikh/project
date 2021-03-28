var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var shoplistRouter = require('./routes/shoplist');
var favoritesRouter = require('./routes/favorites');
var categoriesRouter = require('./routes/categories');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/shoplist', shoplistRouter);
app.use('/favorites', favoritesRouter);
app.use('/categories', categoriesRouter);

module.exports = app;
