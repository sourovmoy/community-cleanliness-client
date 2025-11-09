import React from "react";
import useAuth from "../Hooks/useAuth";
import { Atom } from "react-loading-indicators";
import { Navigate, useLocation } from "react-router";

const PrivetRouter = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useAuth();
  if (loader) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Atom color="#0EA5E9" size="medium" text="" textColor="" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivetRouter;
