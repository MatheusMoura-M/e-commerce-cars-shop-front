import axios from "axios";
const token = localStorage.getItem("@token");

const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default api;
