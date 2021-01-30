const express = require('express');
var bodyParser = require('body-parser')
var compression = require('compression');

const app = express();

app.use(compression());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



const { config } = require('./config/index');

const getDetailProduct = require('./routes/detail-product');
const getAllProducts = require('./routes/products');


getAllProducts(app);
getDetailProduct(app);

app.listen(config.port, function () {
    console.log(`Listen ${config.port}`);
});