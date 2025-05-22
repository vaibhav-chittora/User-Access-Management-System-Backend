import { loginUser, signUpUser } from "../services/user.js";

export const signUpController = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = await signUpUser(username, password, role);
    return res.status(201).json({
      success: true,
      data: user,
      message: "User created successfully",
    });
  } catch (error) {
    console.log("Error signingUp user Controller:", error);
    if (error.status) {
      return res.status(error.status).json({ error: error.message });
    }
    return res
      .status(400)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await loginUser(username, password);
    return res.status(200).json({
      success: true,
      data: user,
      message: "User  logged in successfully",
    });
  } catch (error) {
    console.log("Error loginUser Controller:", error);
    if (error.status) {
      return res.status(error.status).json({ error: error.message });
    }
    return res
      .status(400)
      .json({ success: false, message: "Internal Server Error" });
  }
};
