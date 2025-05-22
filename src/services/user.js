import { JWT_SECRET } from "../config/serverConfig.js";
import { userRepository } from "../repositories/userRepository.js";

export const signUpUser = async (username, password) => {
  try {
    const existingUser = await userRepository.findByUsername(username);
    if (existingUser) {
      throw new Error("Username already exists");
    }
    const user = await userRepository.createUser({
      username,
      password,
      role: "Employee",
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

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return {
      token,
      role: user.role,
    };
  } catch (error) {
    console.log("Error loginUser Service:", error);
    throw error;
  }
};
