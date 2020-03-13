const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

const USERSCHEMA = new Schema({
  nome: String,
  email: String,
  password: String
});

USERSCHEMA.pre("save", function(next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      this.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("user", USERSCHEMA);
