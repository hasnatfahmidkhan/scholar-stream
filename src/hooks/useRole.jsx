import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [role, setRole] = useState("student");
  useEffect(() => {
    axiosSecure
      .get(`/users/${user?.email}/role`)
      .then(({ data }) => setRole(data?.role));
  }, [axiosSecure, user]);
  return role;
};

export default useRole;
