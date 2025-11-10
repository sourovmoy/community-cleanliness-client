import axios from "axios";
import React from "react";

const instance = axios.create({
  baseURL: "https://community-cleanliness-server.vercel.app",
  // baseURL: "http://localhost:3000/issues",
});
const useAxiosInstance = () => {
  return instance;
};

export default useAxiosInstance;
