import React from "react";
import { FaUserCircle } from "react-icons/fa";

const IssuesContribution = ({ contributions }) => {
  return (
    <div>
      <div className="overflow-x-scroll mt-6">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg">
          <thead className="bg-gradient-to-r from-sky-800 to-sky-400 dark:bg-gray-800">
            <tr>
              <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200">
                Contributor
              </th>
              <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200">
                Image
              </th>
              <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200">
                Contribution (৳)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {contributions.map((contribution) => (
              <tr
                key={contribution._id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <td className="px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium break-words">
                  {contribution.email.split("@")[0]}
                </td>
                <td className="px-3 sm:px-4 py-2">
                  {contribution.contributor_image ? (
                    <img
                      src={contribution?.contributor_image}
                      alt={contribution.email}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                    />
                  ) : (
                    <FaUserCircle className="w-10 h-10 sm:w-12 sm:h-12" />
                  )}
                </td>
                <td className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-green-700 dark:text-green-400">
                  ৳ {contribution.paid_amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssuesContribution;
