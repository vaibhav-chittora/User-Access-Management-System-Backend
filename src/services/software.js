import {
  createSoftware,
  getAllSoftware,
} from "../repositories/softwareRepository.js";

export const createSoftwareService = async (data) => {
  try {
    const { name, description, accessLevels } = data;
    if (!name || !description || !accessLevels) {
      throw new Error("All fields are required");
    }
    const validLevels = ["Read", "Write", "Admin"];
    if (!validLevels.includes(accessLevels)) {
      throw new Error(
        "Invalid access level provided, Kindly provide a valid access level like- Read, Write, Admin"
      );
    }

    const newSoftware = await createSoftware({
      name,
      description,
      accessLevels,
    });
    return newSoftware;
  } catch (error) {
    console.log("Error creating software Service:", error);
    throw error;
  }
};

export const getAllSoftwareService = async () => {
  try {
    const allSoftwares = await getAllSoftware();
    return allSoftwares;
  } catch (error) {
    console.log("Error getting all software Service:", error);
    throw error;
  }
};
