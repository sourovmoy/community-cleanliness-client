import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loading from "../../../Components/Loading/Loading";
import { FaExclamationTriangle, FaHandHoldingHeart } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import TinyBarChart from "../../../Components/Chart/TinyBarChart";
import { DashboardCard } from "../../../Components/Card/Card";

const UserHome = () => {
  const axios = useAxiosSecure();
  const [loader, setLoader] = useState(true);
  const [res, setRes] = useState({});

  useEffect(() => {
    setLoader(true);
    axios.get("/user/overview").then((data) => {
      setRes(data.data);
      setLoader(false);
    });
  }, [axios]);

  if (loader) return <Loading />;
  const totalContribution = res.contributionCount
    ?.map((c) => Number(c.paid_amount))
    .reduce((a, b) => a + b, 0);

  return (
    <div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Statistics Overview</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Total Issues */}
          <DashboardCard className="text-white bg-gradient-to-r from-red-500 to-pink-500 h-32">
            <div className="flex items-center gap-4 h-full">
              <div className="text-4xl opacity-90 flex-shrink-0">
                <FaExclamationTriangle />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm opacity-90">Total Issues</p>
                <h3 className="text-3xl font-bold">{res.issuesCount}</h3>
              </div>
            </div>
          </DashboardCard>

          {/* Total Contributions */}
          <DashboardCard className="text-white bg-gradient-to-r from-green-500 to-emerald-600 h-32">
            <div className="flex items-center gap-4 h-full">
              <div className="text-4xl opacity-90 flex-shrink-0">
                <FaHandHoldingHeart />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm opacity-90">Total Contributions</p>
                <h3 className="text-3xl font-bold flex items-center gap-1">
                  {totalContribution} <FaBangladeshiTakaSign />
                </h3>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center mt-10">
        <p className="my-10 font-medium text-2xl">Contribution in projects</p>
        <TinyBarChart res={res} />
      </div>
    </div>
  );
};

export default UserHome;
