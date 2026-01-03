import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {
  FaExclamationTriangle,
  FaHandHoldingHeart,
  FaUsers,
} from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import AdminChart from "../../../Components/Chart/AdminChart";

const AdminHome = () => {
  const [data, setData] = useState({});
  const axios = useAxiosSecure();
  useEffect(() => {
    axios.get("/admin/overview").then((res) => {
      setData(res.data);
    });
  }, [axios]);
  const totalContribution = data.contributionCount
    ?.map((c) => Number(c.paid_amount))
    .reduce((a, b) => a + b, 0);

  return (
    <div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Statistics Overview</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Issues */}
          <div className="rounded-2xl p-6 text-white shadow-lg bg-gradient-to-r from-red-500 to-pink-500">
            <div className="flex items-center gap-4">
              <div className="text-4xl opacity-90">
                <FaExclamationTriangle />
              </div>
              <div>
                <p className="text-sm opacity-90">Total Issues</p>
                <h3 className="text-3xl font-bold">{data.totalIssues}</h3>
              </div>
            </div>
          </div>

          {/* Total Users */}
          <div className="rounded-2xl p-6 text-white shadow-lg bg-gradient-to-r from-sky-500 to-blue-600">
            <div className="flex items-center gap-4">
              <div className="text-4xl opacity-90">
                <FaUsers />
              </div>
              <div>
                <p className="text-sm opacity-90">Total Users</p>
                <h3 className="text-3xl font-bold">{data.totalUser}</h3>
              </div>
            </div>
          </div>

          {/* Total Contributions */}
          <div className="rounded-2xl p-6 text-white shadow-lg bg-gradient-to-r from-green-500 to-emerald-600">
            <div className="flex items-center gap-4">
              <div className="text-4xl opacity-90">
                <FaHandHoldingHeart />
              </div>
              <div>
                <p className="text-sm opacity-90">Total Contributions</p>
                <h3 className="text-3xl font-bold flex items-center gap-1">
                  {totalContribution} <FaBangladeshiTakaSign />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AdminChart data={data} />
      </div>
    </div>
  );
};

export default AdminHome;
