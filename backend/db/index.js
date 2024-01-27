
const config = require( "/config.js" );
const mongoose = require( "mongoose" );
const fear_db = {};

mongoose.Promise = global.Promise;
fear_db.mongoose = mongoose;
fear_db.url = config.url;


fear_db.users = require( "../model/user.js" );
fear_db.products = require( "../model/product.js" );
fear_db.orders = require( "../model/order.js" );


module.exports = fear_db;