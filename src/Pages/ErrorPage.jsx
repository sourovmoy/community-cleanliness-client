import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-sky-800 to-sky-500 text-white px-4 text-center m-10 rounded-full">
        <h1 className="text-9xl font-extrabold animate-bounce drop-shadow-lg">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg md:text-xl mt-3 max-w-md opacity-90">
          The page you’re looking for doesn’t exist or has been moved. Don’t
          worry, you can get back on track!
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 px-8 py-3 bg-white text-[#3b8132] font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        >
          Go Home
        </button>

        <div className="mt-10 relative w-40 h-40 md:w-56 md:h-56">
          <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full animate-ping"></div>
          <div className="absolute inset-4 bg-white bg-opacity-30 rounded-full"></div>
          <div className="absolute inset-8 bg-white bg-opacity-40 rounded-full flex items-center justify-center text-3xl font-bold">
            😕
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
