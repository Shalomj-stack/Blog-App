const User = require("../models/user");
const getToken = require("../config/jwt");

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);
    const token = getToken(user._id);
    res.status(200).json({ name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = getToken(user._id);
    res.status(200).json({ name: user.name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findById({ _id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const { name, email } = user;
    res.status(200).json({ name, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { signupUser, loginUser, getUser };
