const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.article= require("./article.model")
db.livre= require("./livre.model")
db.ROLES = ["user", "admin","visiteur"];

module.exports = db;