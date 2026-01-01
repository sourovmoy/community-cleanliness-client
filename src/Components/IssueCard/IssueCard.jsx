import React, { useState } from "react";
import { Link } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import { TbCurrencyTaka } from "react-icons/tb";

const IssueCard = ({ issue }) => {
  const [id, setId] = useState(null);
  const handelModal = (id) => {
    setId(id);
    document.getElementById(id).showModal();
  };

  return (
    <div>
      <div className="rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 h-98">
        <div className="relative">
          <img
            src={issue.image}
            alt={issue.title}
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-3 left-3 bg-sky-300  text-xs font-semibold px-3 py-1 rounded-full">
            {issue.category}
          </span>
        </div>

        <div className="p-5">
          <p className="text-xm dark:text-gray-300 mb-1 font-semibold line-clamp-2">
            {issue.title}
          </p>
          {issue.status && (
            <div className="badge badge-soft bg-sky-100 text-sky-800 font-bold">
              {issue.status}
            </div>
          )}

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <span className="ml-1 text-sm font-medium dark:text-gray-300 flex items-center gap-2">
                <CiLocationOn /> {issue.location}
              </span>
            </div>
            <span className="font-semibold flex items-center gap-1 dark:text-gray-300">
              Budget: {issue.amount}
              <TbCurrencyTaka />
            </span>
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
