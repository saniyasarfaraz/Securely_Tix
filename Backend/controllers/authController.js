const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const email = req.body.email?.toLowerCase();
  const { password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      console.log("User already exists with email:", email);
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error("Registration server error:", err); // Add this line
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ msg: "User already exists (duplicate key)" });
    }
    res.status(500).json({ msg: "Server error" });
  }
};

exports.login = async (req, res) => {
  const { email, password, remember } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: remember ? "7d" : "1h", // Remember Me functionality
    });

    res.status(200).json({ token, user: { email: user.email } });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
