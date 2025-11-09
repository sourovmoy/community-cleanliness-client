import axios from "axios";
import React from "react";

const instance = axios.create({
  baseURL: "https://community-cleanliness-server.vercel.app",
});
const useAxiosInstance = () => {
  return instance;
};

export default useAxiosInstance;
