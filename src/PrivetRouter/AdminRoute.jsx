import React from "react";
import useRole from "../Hooks/useRole";
import Loading from "../Components/Loading/Loading";
import UnauthorizedPage from "../Pages/UnauthorizedPage";

const AdminRoute = ({ children }) => {
  const { role, roleLoader } = useRole();
  if (roleLoader) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  }
  if (role !== "admin") {
    return <UnauthorizedPage />;
  }
  return children;
};

export default AdminRoute;
