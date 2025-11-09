import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "https://community-cleanliness-server.vercel.app",
});

const useAxiosSecure = () => {
  const { user } = useAuth();
  instance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  return instance;
};

export default useAxiosSecure;
