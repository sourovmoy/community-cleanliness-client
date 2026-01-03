import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const [role = "user", setRole] = useState("");
  const [roleLoader, setRoleLoader] = useState(true);
  const { user, setLoader, loader } = useAuth();
  const axios = useAxiosSecure();
  useEffect(() => {
    if (user?.email) {
      setRoleLoader(true);
      axios.get(`/users/${user?.email}/role`).then((res) => {
        setRoleLoader(false);
        setRole(res.data.role);
        return res.data.role;
      });
    }
  }, [axios, setLoader, user, loader]);
  return { role, roleLoader };
};

export default useRole;
