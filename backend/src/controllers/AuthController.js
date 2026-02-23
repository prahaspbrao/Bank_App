const AuthService = require("../service/AuthService");

class AuthController {

  static async loginUser(req, res, next) {
    try {
      const result = await AuthService.loginUser(req.body);

      res.status(200).json(result);

    } catch (error) {
      next(error);
    }
  }

  static async registerUser(req, res, next) {
  try {
    const result = await AuthService.registerUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

static async profileUser(req , res){
  const res_obj = await AuthService.profileUser(req.user);
  res.status(200).send(res_obj)
}
}

module.exports = AuthController;