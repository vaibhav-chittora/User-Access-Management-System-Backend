import { AppDataSource } from "../config/dbConfig.js";
import { User } from "../models/user.js";

const userRepo = AppDataSource.getRepository(User);

export const userRepository = {
  findByUsername: async (username) => {
    return await userRepo.findOneBy({ username });
  },

  createUser: async (userData) => {
    const user = userRepo.create(userData);
    return await userRepo.save(user);
  },
};
