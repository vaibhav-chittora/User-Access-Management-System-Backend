import express from "express";
import authRouter from "./auth.js";
import softwareRouter from "./software.js";
const router = express.Router();

router.use("/auth", authRouter);

router.use("/software", softwareRouter);

export default router;
