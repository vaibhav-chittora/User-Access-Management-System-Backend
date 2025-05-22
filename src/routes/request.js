import express from "express";
import {
  handleGetAllRequests,
  handleSubmitRequest,
  handleUpdateRequestStatus,
} from "../controllers/requestController.js";
import {
  isAuthenticated,
  isManagerOrAdmin,
} from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/", isAuthenticated, handleSubmitRequest);
router.get("/", isAuthenticated, isManagerOrAdmin, handleGetAllRequests);

router.patch(
  "/:id",
  isAuthenticated,
  isManagerOrAdmin,
  handleUpdateRequestStatus
);

export default router;
