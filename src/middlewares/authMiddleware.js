import { JWT_SECRET } from "../config/serverConfig.js";
import jwt from "jsonwebtoken";
import { userRepository } from "../repositories/userRepository.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers["authorization-token"];
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "You are not authenticated",
      });
    }
    const isTokenValid = jwt.verify(token, JWT_SECRET);
    if (!isTokenValid) {
      return res.status(400).json({
        success: false,
        message: "Token is not valid, please login again",
        error: error.message,
      });
    }

    const doesUserExist = await userRepository.findByUsername(
      isTokenValid.username
    );
    if (!doesUserExist) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }

    req.user = isTokenValid;

    next();
  } catch (error) {
    console.log("Error in isAuthenticated middleware:", error);
    return res.status(401).json({
      success: false,
      message: "You are not authenticated",
      error: error.message,
    });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(401).json({
        success: false,
        message:
          "You are not an admin, you are not allowed to access this route",
      });
    }
    next();
  } catch (error) {
    console.log("Error in isAdmin Middleware", error);
    return res.status(400).json({
      success: false,
      message: "Unauthorized access",
      error: error.message,
    });
  }
};
