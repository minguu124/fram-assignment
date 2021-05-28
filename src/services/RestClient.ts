import axios from "axios";
export const BASE_URL = "https://60b0c71c1f26610017fff32c.mockapi.io/api";
export const PATH = {
  USER: "/user"
};

let config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,PATCH",
    "Access-Control-Allow-Credentials": "true"
  },
  withCredentials: false,
  baseURL: BASE_URL,
  timeout: 30000
};

export default axios.create(config);
