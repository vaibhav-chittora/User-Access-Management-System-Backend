import express from "express";
import { signUpController, loginController } from "../controllers/auth.js";

const router = express.Router();

router.post("auth/signup", signUpController);
router.post("auth/login", loginController);

export default router;
