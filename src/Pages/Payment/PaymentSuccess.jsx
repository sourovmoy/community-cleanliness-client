import React from "react";
import { Link, useParams } from "react-router";

const PaymentSuccess = () => {
  const { transactionId } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <svg
              className="w-10 h-10 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Payment Successful 🎉
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Thank you! Your payment has been processed successfully.
        </p>

        {/* Payment Details */}
        <div className="bg-sky-50 dark:bg-gray-700 rounded-xl p-4 mb-6 text-left">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Transaction ID:</span>{" "}
            {transactionId}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/" className="btn-primary w-full">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
