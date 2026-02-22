const UserModel = require("../models/UserModel.js");
const ApiError = require("../utils/ApiError.js");

class AuthService {
  static async loginUser(body) {
  const { email, password } = body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password required");
  }

  const user = await UserModel.findOne({
    email: email.toLowerCase(),
  });

  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new ApiError(401, "Invalid credentials");
  }

  // remove password
  const userObj = user.toObject();
  delete userObj.password;

  return {
    success: true,
    message: "Login successful",
    user: userObj,
  };
}

  static async registerUser(body) {
  const { name, email, password, ac_type } = body;

  const check_exist = await UserModel.findOne({
    email: email.toLowerCase(),
  });

  if (check_exist) {
    throw new ApiError(400, "Email Already exists");
  }

  const user = await UserModel.create({
    name,
    email,
    password,
    ac_type,
  });

  const userObj = user.toObject();
  delete userObj.password;

  return {
    success: true,
    message: "User registered successfully",
    user: userObj,
  };
}
}

module.exports = AuthService;
