import React from "react";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router";

const UnauthorizedPage = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center border rounded-xl p-8 shadow-sm">
          <FaLock className="mx-auto text-4xl text-gray-400 mb-4" />

          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Access Denied
          </h1>

          <p className="text-gray-500 mb-6">
            You don’t have permission to access this page.
          </p>

          <div className="flex justify-center gap-4">
            <Link to="/" className="btn btn-primary btn-sm">
              Go Home
            </Link>
            <Link to="/login" className="btn btn-outline btn-sm">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
