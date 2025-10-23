// src/api/feedbackApi.js
import axios from "axios";
import { BASE_URL } from "./config";

// 🟢 Submit feedback to a user's public profile
export const submitFeedback = async (username, message) => {
  const res = await axios.post(`${BASE_URL}/feedback/${username}`, { message });
  return res.data;
};

// 🟢 Get all feedback for the logged-in user
export const getUserFeedback = async (token) => {
  const res = await axios.get(`${BASE_URL}/feedback/my-feedback`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// 🟢 Delete feedback (optional)
export const deleteFeedback = async (id, token) => {
  const res = await axios.delete(`${BASE_URL}/feedback/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
