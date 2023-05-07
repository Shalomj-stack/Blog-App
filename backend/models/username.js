const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usernameSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    username: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Username", usernameSchema);
