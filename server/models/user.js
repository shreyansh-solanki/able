const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  jobrole: {
    type: String,
    required: true,
  },
  jobprofile: {
    type: String,
    required: true,
  },
  jobdescription: {
    type: String,
    require: true,
  },
});

//Encrypting the password using bcryptjs npm package
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 8); //8 is the round of hashing used we can also increase or decrease.
    this.cpassword = await bcryptjs.hash(this.cpassword, 8);
  }
  next();
});

// const SECRET_KEY =
//   "asdfasdfasfasgsgasdgsgasdggfsdfasddfjlasdhfasdhfkjlashfkjhasf";

// Generating Token using jwt(jsonwebtoken) to check whether the user is current user
// userSchema.methods.generateAuthToken = async function () {
//   try {
//     let token = jwt.sign({ _id: this._id }, SECRET_KEY);
//     this.tokens = this.tokens.concat({ token: token });
//     await this.save();
//     return token;
//   } catch (err) {
//     console.log(err);
//   }
// };

const User = mongoose.model("User", userSchema);

module.exports = User;
