import { JWT_SECRET } from "../config/serverConfig.js";
import { userRepository } from "../repositories/userRepository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signUpUser = async (username, password, role) => {
  try {
    const existingUser = await userRepository.findByUsername(username);
    if (existingUser) {
      throw new Error("Username already exists");
    }

    const validRoles = ["Employee", "Admin", "Manager"];

    if (!validRoles.includes(role)) {
      throw new Error(
        "Invalid role provided, Kindly provide a valid role like- Employee, Admin, Manager"
      );
    }

    // Hash the password before saving it to the database
    const SALT = bcrypt.genSaltSync(9);
    const hashedPassword = bcrypt.hashSync(password, SALT);
    password = hashedPassword;

    const user = await userRepository.createUser({
      username,
      password,
      role: role,
    });
    return user;
  } catch (error) {
    console.log("Error signingUp user Service:", error);
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const isUserExist = await userRepository.findByUsername(username);
    if (!isUserExist) {
      throw new Error("User not found");
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      isUserExist.password
    );
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ username }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return {
      token,
      username: isUserExist.username,
      id: isUserExist.id,
      role: isUserExist.role,
    };
  } catch (error) {
    console.log("Error loginUser Service:", error);
    throw error;
  }
};
