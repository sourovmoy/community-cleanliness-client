import React, { useState } from "react";
import { Link } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import { TbCurrencyTaka } from "react-icons/tb";
import { IssueCardContainer } from "../Card/Card";


const IssueCard = ({ issue }) => {
  const [id, setId] = useState(null);
  const handelModal = (id) => {
    setId(id);
    document.getElementById(id).showModal();
  };

  return (
    <IssueCardContainer>
      {/* Image Section - Fixed Height */}
      <div className="relative h-48 flex-shrink-0">
        <img
          src={issue.image}
          alt={issue.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-sky-300 text-xs font-semibold px-3 py-1 rounded-full">
          {issue.category}
        </span>
        <span className="absolute top-3 right-3">
            {issue.status && (
          <div className="mb-3">
            <div className="badge badge-soft bg-sky-100 text-sky-800 font-bold text-xs">
              {issue.status}
            </div>
          </div>
        )}
        </span>
      </div>

      {/* Content Section - Flexible Height */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title - Fixed Height with Line Clamp */}
        <div className="h-12 mb-2">
          <p className="text-sm dark:text-gray-300 font-semibold line-clamp-2 leading-6">
            {issue.title}
          </p>
        </div>

        {/* Location and Budget - Fixed Height */}
        <div className="flex items-center justify-between mb-4 h-8">
          <div className="flex items-center min-w-0 flex-1">
            <span className="text-sm font-medium dark:text-gray-300 flex items-center gap-1 truncate">
              <CiLocationOn className="flex-shrink-0" /> 
              <span className="truncate">{issue.location}</span>
            </span>
          </div>
          <span className="font-semibold flex items-center gap-1 dark:text-gray-300 text-sm ml-2 flex-shrink-0">
            Budget: {issue.amount}
            <TbCurrencyTaka />
          </span>
        </div>

        {/* Button - Fixed at Bottom */}
        <div className="mt-auto">
          <Link
            to={`/all-issues/${id}`}
            onClick={() => handelModal(issue._id)}
            className="w-full flex items-center justify-center gap-2 bg-sky-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-sky-700 transition-all duration-200"
          >
            See Details
          </Link>
        </div>
      </div>
    </IssueCardContainer>
  );
};

export default IssueCard;
