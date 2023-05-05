import axios from "axios";
const token = localStorage.getItem("@token");

const instanceKenzieCars = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { instance, instanceKenzieCars };
