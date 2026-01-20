import { useEffect, useState } from "react";
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Statistics Overview</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Total Issues */}
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-32">
            <div className="flex items-center gap-4 h-full p-6 text-white">
              <div className="text-4xl opacity-90 flex-shrink-0">
                <FaExclamationTriangle />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm opacity-90 mb-1">Total Issues</p>
                <h3 className="text-3xl font-bold">{res.issuesCount || 0}</h3>
              </div>
            </div>
          </div>

          {/* Total Contributions */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-32">
            <div className="flex items-center gap-4 h-full p-6 text-white">
              <div className="text-4xl opacity-90 flex-shrink-0">
                <FaHandHoldingHeart />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm opacity-90 mb-1">Total Contributions</p>
                <h3 className="text-3xl font-bold flex items-center gap-1">
                  {totalContribution || 0} <FaBangladeshiTakaSign />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center mt-10 px-6">
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <h3 className="text-2xl font-medium text-gray-900 dark:text-white text-center mb-8">
            Contribution in Projects
          </h3>
          <div className="flex justify-center">
            <TinyBarChart res={res} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
