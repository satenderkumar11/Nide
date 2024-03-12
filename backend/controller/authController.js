const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/User");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("all fields must be filled");
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      res.status(401).send("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({ email: email, password: hashedPassword });
    const docs = await newUser.save();
    // console.log(docs);

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    docs.token = token;
    docs.password = undefined;
    res.status(201).json(docs);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Registration failed", error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("email or password not sent");
    }
    var now = new Date();
    // convert date to a string in UTC timezone format:
    console.log(now.toUTCString());
    const existingUser = await UserModel.findOne({ email });
    if (
      existingUser &&
      (await bcrypt.compare(password, existingUser.password))
    ) {
      const token = await jwt.sign(
        { id: existingUser._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );

      const options = {
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        existingUser,
      });
    }
  } catch (err) {
    res
      .status(400)
      .json({ message: "Registration failed", error: err.message });
  }
};
