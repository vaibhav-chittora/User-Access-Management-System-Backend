import {
  createSoftwareService,
  getAllSoftwareService,
} from "../services/software.js";

export const createSoftwareController = async (req, res) => {
  try {
    const { name, description, accessLevels } = req.body;
    const newSoftware = await createSoftwareService({
      name,
      description,
      accessLevels,
    });
    return res.status(201).json({
      success: true,
      data: newSoftware,
      message: "Software created successfully",
    });
  } catch (error) {
    console.log("Error creating software Controller:", error);
    if (error.status) {
      return res.status(error.status).json({ error: error.message });
    }
    return res
      .status(400)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const getAllSoftwareController = async (req, res) => {
  try {
    const allSoftwares = await getAllSoftwareService();
    return res.status(200).json({
      success: true,
      data: allSoftwares,
      message: "All Softwares fetched successfully",
    });
  } catch (error) {
    console.log("Error getting all software Controller:", error);
    if (error.status) {
      return res.status(error.status).json({ error: error.message });
    }
    return res
      .status(400)
      .json({ success: false, message: "Internal Server Error" });
  }
};
