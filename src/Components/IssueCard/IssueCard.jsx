import React, { useState } from "react";
import { Link } from "react-router";

const IssueCard = ({ issue }) => {
  const [id, setId] = useState(null);
  const handelModal = (id) => {
    setId(id);
    document.getElementById(id).showModal();
  };

  return (
    <div>
      <div className="text-base-200 bg-gradient-to-r from-sky-900 to-sky-600 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 h-auto">
        <div className="relative">
          <img
            src={issue.image}
            alt={issue.title}
            className="w-full h-56 object-cover"
          />
          <span className="absolute top-3 left-3 bg-sky-300  text-xs font-semibold px-3 py-1 rounded-full">
            {issue.category}
          </span>
        </div>

        <div className="p-5">
          <p className="text-xl text-base-300 dark:text-gray-300 mb-2 line-clamp-2">
            {issue.title}
          </p>
          <p className="text-sm text-base-300 dark:text-gray-300 mb-2 line-clamp-2">
            {issue.description}
          </p>
          {issue.status && (
            <div className="badge badge-soft bg-sky-100 text-sky-800 font-bold">
              primary
              {issue.status}
            </div>
          )}

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <span className="ml-1 text-sm font-medium text-base-200  ">
                {issue.location}
              </span>
            </div>
            <span className="font-semibold">${issue.amount}</span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <Link
              to={`/all-issues/${id}`}
              onClick={() => handelModal(issue._id)}
              className="flex items-center gap-2 bg-sky-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-sky-700 transition-all duration-200"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
