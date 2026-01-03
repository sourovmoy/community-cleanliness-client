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
    <div>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[600px] bg-white rounded-xl shadow-md">
          <table className="table table-zebra w-full">
            {/* Table Head */}
            <thead className="bg-base-200 text-base font-semibold">
              <tr>
                <th>#</th>
                <th>Issue Title</th>
                <th className="text-right">Total Contribution (৳)</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="font-medium">{index + 1}</td>

                  <td className="max-w-[350px]">
                    <p className="line-clamp-2">{item.title}</p>
                  </td>

                  <td className="text-right font-semibold text-green-600">
                    ৳ {item.totalAmount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContributionDetails;
