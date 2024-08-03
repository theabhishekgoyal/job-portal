import express from "express";
import { forgotPassword, login, logout, register, resetPassword, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";
 
const router = express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/forgot-password").post(forgotPassword),
router.route("/reset-password/:token").post(resetPassword);
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);

export default router;

