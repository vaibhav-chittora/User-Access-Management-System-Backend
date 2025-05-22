import { AppDataSource } from "../config/dbConfig.js";
import Software from "../models/software.js";

const softwareRepo = AppDataSource.getRepository(Software);

export const createSoftware = async (data) => {
  try {
    const newSoftware = softwareRepo.create(data);
    return await softwareRepo.save(newSoftware);
  } catch (error) {
    throw error;
  }
};

export const getAllSoftware = async () => {
  try {
    return await softwareRepo.find();
  } catch (error) {
    throw error;
  }
};
