const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/User");
const bcrypt = require("bcryptjs");

// exports.register = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log(email);
//     console.log(password);

//     const existingUser = await UserModel.findOne({ email: email });
//     console.log(existingUser);
//     if (existingUser != null) {
//       return res
//         .status(400)
//         .json({ message: "User already exists with this email" });
//     }
//     const salt = await bcrypt.genSalt(10);
//     console.log("salt", salt);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     console.log(hashedPassword);
//     const newUser = new UserModel({ email: email, password: hashedPassword });
//     const docs = await newUser.save();
//     console.log(docs);

//     const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
//     res.cookie("token", token, {
//       httpOnly: true,
//       expires: new Date(Date.now() + 60 * 1000),
//       domain: "localhost",
//       path: "/",
//       httpOnly: true,
//       secure: true,
//     });
//     res.status(201).json(docs);

//     // write the code for redirect below
//   } catch (err) {
//     res
//       .status(400)
//       .json({ message: "Registration failed", error: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   try {

//     const { email, password } = req.body;
//     const user = await UserModel.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isPasswordValid = await user.comparePassword(password);
//     if (!isPasswordValid)
//       return res.status(401).json({ message: "Invalid password" });

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
//     res.cookie("token", token, {
//       httpOnly: true,
//       expires: new Date(Date.now() + 60 * 1000),
//       domain: "localhost",
//       path: "/",
//       httpOnly: true,
//       secure: true,
//     });
//     res.json({ message: "Login successful", token });

//     // write the code for redirect below
//   } catch (err) {
//     res.status(400).json({ message: "Login failed", error: err.message });
//   }
// };
// exports.logout = (req, res) => {
//   try {
//     // res.cookie("token", null, {
//     //   httpOnly: true,
//     //   expires: new Date(Date.now()),
//     //   domain: "localhost",
//     //   path: "/",
//     //   httpOnly: true,
//     //   secure: true,
//     // });
//     res.clearCookie("token", {
//       domain: "localhost", // Replace with your domain
//       path: "/", // Specify the path of the cookie
//       httpOnly: true, // Ensure httpOnly is set to true
//       secure: true, // Set to true if served over HTTPS
//     });

//     // res.clearCookie("token");
//     res.json({ message: "Logout successful" });
//   } catch (err) {
//     res.status(400).json({ message: "logout failed" });
//   }

// };

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
    // const newUser = await UserModel.create({
    //   email,
    //   hashedPassword
    // })
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
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 60 * 1000),
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
