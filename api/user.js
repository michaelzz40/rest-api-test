const express = require("express");
const { facebookLogin, getUserInfo } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const userRouter = express.Router();

userRouter.post("/facebook-login", facebookLogin);
userRouter.get("/user-info", protect, getUserInfo);

module.exports = userRouter;
