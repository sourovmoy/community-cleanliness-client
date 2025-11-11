import React from "react";

import { FaCheckCircle, FaClock, FaLeaf, FaUserFriends } from "react-icons/fa";

const CommunitySection = () => {
  return (
    <div className="bg-gradient-to-r from-sky-100 to-sky-200 dark:from-gray-800 dark:to-gray-900 py-16 px-4">
      {/* Community Stats */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Our{" "}
          <span className="text-transparent bg-clip-text heading-primary">
            Community Impact
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Together we’re making our neighborhoods cleaner, greener, and safer 🌿
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center">
            <FaUserFriends className="text-green-600 w-10 h-10 mb-3" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              1,200+
            </h3>
            <p className="text-gray-500 dark:text-gray-300">Registered Users</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center">
            <FaCheckCircle className="text-green-600 w-10 h-10 mb-3" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              320+
            </h3>
            <p className="text-gray-500 dark:text-gray-300">Issues Resolved</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center">
            <FaClock className="text-green-600 w-10 h-10 mb-3" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              75
            </h3>
            <p className="text-gray-500 dark:text-gray-300">Pending Issues</p>
          </div>
        </div>
      </div>

      {/* Volunteer CTA */}
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 text-center">
        <FaLeaf className="w-14 h-14 text-green-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Join Our Clean Drive Initiative
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Be a part of something bigger — volunteer with us to make your city
          cleaner and healthier for everyone!
        </p>
        <button className="btn bg-gradient-to-r from-[#3b8132] to-[#72bf6a] hover:scale-105 transition-transform text-white font-semibold px-6 py-3 rounded-lg">
          Join as Volunteer
        </button>
      </div>
    </div>
  );
};

export default CommunitySection;
