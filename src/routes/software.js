import express from "express";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";
import {
  createSoftwareController,
  getAllSoftwareController,
} from "../controllers/softwareController.js";

const router = express.Router();

router.post("/", isAuthenticated, isAdmin, createSoftwareController); // Adds a new software

router.get("/", isAuthenticated, getAllSoftwareController); // Retrieves all software

export default router;
