const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
    default: "Add description in the edit page above.",
  },
});
const User = mongoose.model("User", UserSchema);

module.exports = User;
