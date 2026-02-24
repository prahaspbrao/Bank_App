const ApiError = require("../utils/ApiError");

const NotFoundError = (err, req, res, next) => {

    // ⭐ ADD THIS LINE (MOST IMPORTANT)
    console.error("🔥 BACKEND ERROR:", err);

    const error_obj = {
        code: 500,
        msg: err.message,
        stack: err.stack,
    };

    if (err instanceof ApiError) {
        error_obj.code = err.statusCode;
    }

    res.status(error_obj.code).send(error_obj);
};

module.exports = NotFoundError;