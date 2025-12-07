import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: import.meta.env.VITE_DOMAIN_URL,
});

const useAxios = () => {
  const { user } = useAuth();
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
        return config;
      },
      (err) => {
        console.log(err);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, [user]);
  return instance;
};

export default useAxios;
