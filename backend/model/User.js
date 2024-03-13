const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// const userSchema = new mongoose.Schema({

//     firstName: {type: String, required: true},
//     lastName: {type: String, required: true},
//     email: {type: String, required: true, unique: true},
//     passwordHash: {type: String, required: true },
//     role: {type: String, required: true}, // Need clarification
//     wishlist: [
//         {type: mongoose.Schema.Types.ObjectId, ref: 'ProductModel'}
//     ],
//     jobsApplied: [
//         {type: mongoose.Schema.Types.ObjectId, ref: 'JobModel'}
//     ]
// });

const userSchema = new mongoose.Schema({
  name:{ type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
exports.UserModel = mongoose.model("User", userSchema);
