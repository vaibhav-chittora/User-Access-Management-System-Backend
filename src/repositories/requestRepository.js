import { AppDataSource } from "../config/dbConfig.js";
import Request from "../models/request.js";

const requestRepo = AppDataSource.getRepository(Request);

export const RequestRepository = {
  async createRequest(data) {
    try {
      const request = requestRepo.create(data);
      return await requestRepo.save(request);
    } catch (error) {
      throw error;
    }
  },

  async getRequestById(id) {
    try {
      return await requestRepo.findOne({
        where: { id },
        relations: ["user", "software"],
      });
    } catch (error) {
      throw error;
    }
  },

  async getAllRequests() {
    try {
      return await requestRepo.find({
        relations: ["user", "software"],
      });
    } catch (error) {
      throw error;
    }
  },

  async updateRequestStatus(id, status) {
    try {
      const request = await requestRepo.findOneBy({ id });
      if (!request) return null;
      request.status = status;
      return await requestRepo.save(request);
    } catch (error) {
      throw error;
    }
  },
};
