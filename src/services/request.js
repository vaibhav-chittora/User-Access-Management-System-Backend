import { RequestRepository } from "../repositories/requestRepository.js";

export async function submitAccessRequest(
  userId,
  software,
  accessType,
  reason
) {
  try {
    const data = {
      user: { id: userId },
      software: { id: software },
      accessType,
      reason,
      status: "Pending",
    };
    return await RequestRepository.createRequest(data);
  } catch (error) {
    throw error;
  }
}

export async function fetchAllRequests() {
  try {
    return await RequestRepository.getAllRequests();
  } catch (error) {
    throw error;
  }
}

export async function approveOrRejectRequest(id, status) {
  try {
    if (!["Approved", "Rejected"].includes(status)) {
      throw new Error("Invalid status");
    }
    const result = await RequestRepository.updateRequestStatus(id, status);
    if (!result) throw new Error("Request not found");
    return result;
  } catch (error) {
    throw error;
  }
}
