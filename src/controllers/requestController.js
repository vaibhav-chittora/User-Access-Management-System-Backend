import {
  submitAccessRequest,
  fetchAllRequests,
  approveOrRejectRequest,
} from "../services/request.js";

export async function handleSubmitRequest(req, res) {
  try {
    const { software, accessType, reason } = req.body;
    const userId = req.user.id; // assuming auth middleware sets req.user
    const request = await submitAccessRequest(
      userId,
      software,
      accessType,
      reason
    );
    return res.status(201).json({ success: true, data: request });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function handleGetAllRequests(req, res) {
  try {
    const requests = await fetchAllRequests();
    return res.status(200).json({ success: true, data: requests });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function handleUpdateRequestStatus(req, res) {
  try {
    const requestId = req.params.id;
    const { status } = req.body;
    const updatedRequest = await approveOrRejectRequest(requestId, status);
    return res.status(200).json({ success: true, data: updatedRequest });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}
