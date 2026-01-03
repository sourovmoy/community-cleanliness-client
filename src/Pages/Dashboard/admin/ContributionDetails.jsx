import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ContributionDetails = () => {
  const [data, setData] = useState([]);
  const axios = useAxiosSecure();
  useEffect(() => {
    axios.get("/admin/contributions").then((res) => {
      setData(res.data);
    });
  }, [axios]);
  return (
    <div className="w-full overflow-x-auto px-4 py-6">
      <div className="min-w-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead className="bg-base-200 dark:bg-gray-700 text-base font-semibold text-gray-700 dark:text-gray-200">
            <tr>
              <th>#</th>
              <th>Issue Title</th>
              <th className="text-right">Total Contribution (৳)</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="font-medium text-gray-800 dark:text-gray-100">
                  {index + 1}
                </td>

                <td className="max-w-[350px] text-gray-800 dark:text-gray-100">
                  <p className="line-clamp-2">{item.title}</p>
                </td>

                <td className="text-right font-semibold text-green-600 dark:text-green-400">
                  ৳ {item.totalAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContributionDetails;
