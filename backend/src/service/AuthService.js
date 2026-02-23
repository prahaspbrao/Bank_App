const UserModel = require("../models/UserModel.js");
const ApiError = require("../utils/ApiError.js");
const JWTService = require("../utils/JwtService.js");
const bcrypt = require("bcrypt");

class AuthService {
  static async loginUser(body) {
    const { email, password } = body;

    if (!email || !password) {
      throw new ApiError(400, "Email and password required");
    }

    const check_exist = await UserModel.findOne({
      email: email.toLowerCase(),
    });

    if (!check_exist) {
      throw new ApiError(401, "Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, check_exist.password);

    if (!isMatch) {
      throw new ApiError(401, "Invalid credentials");
    }

    const token = JWTService.generateToken(check_exist._id);

    return {
      success: true,
      message: "Login successful",
      token: token,
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

  static async profileUser(userId) {
    const userData = await UserModel.findById(userId).select(
      "name email ac_type createdAt -_id",
    );

    if (!userData) {
      throw new ApiError(401, "User not found!!");
    }

    return {
      success: true,
      user: userData,
    };
  }
}

module.exports = AuthService;
