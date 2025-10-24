// src/api/authApi.js
import axios from "axios";
import { BASE_URL } from "./config";

// 🟢 SIGNUP (Create new user)
export const signupUser = async (email, password) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/signup`, { email, password });
    return res.data;
  } catch (error) {
    console.error("Signup API Error:", error.response?.data || error.message);
    throw error;
  }
};

// 🟢 LOGIN (Authenticate user)
export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, { email, password });
    return res.data;
  } catch (error) {
    console.error("Login API Error:", error.response?.data || error.message);
    throw error;
  }
};

// 🟢 LOGOUT (optional – just clear localStorage)
export const logoutUser = async () => {
  localStorage.removeItem("user");
};
