const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const USERSCHEMA = new Schema({
  nome: String,
  email: String,
  password: String
});

module.exports = mongoose.model('user', USERSCHEMA)
