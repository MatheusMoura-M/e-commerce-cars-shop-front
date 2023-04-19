import axios from "axios";

const token = localStorage.getItem("");

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});

const instanceKenzieCars = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { instance, instanceKenzieCars };
