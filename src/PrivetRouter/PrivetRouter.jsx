import React from "react";
import useAuth from "../Hooks/useAuth";
import { Atom } from "react-loading-indicators";
import { Navigate, useLocation } from "react-router";

const PrivetRouter = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useAuth();
  if (loader) {
    return (
      <div>
        <Atom color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }

  return <div>{{ children }}</div>;
};

export default PrivetRouter;
