import express from "express";
import authRouter from "./auth.js";
import softwareRouter from "./software.js";
import requestRouter from "./request.js";

const router = express.Router();

router.use("/auth", authRouter);

router.use("/software", softwareRouter);

router.use("/requests", requestRouter);

export default router;
