import React from "react";
import { FaCross, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router";

const PaymentFailed = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        {/* Cancel Icon */}
        <div className="flex justify-center mb-6 text-red-500 text-6xl">
          <FaTimesCircle />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Payment Cancelled
        </h2>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Your payment was cancelled. You can try again anytime.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/" className="btn-primary w-full">
            Back to Home
          </Link>

          <Link to="/all-issues" className="btn-outline w-full">
            Browse Issues
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
