import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../Hooks/useAuth";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import { Atom } from "react-loading-indicators";
import { CiLocationOn } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import Swal from "sweetalert2";
import IssuesContribution from "../Components/IssuesContribution/IssuesContribution";
import MotionHeading from "../Components/Motion/MotionHeading";
import SkeletonDetail from "../Components/Skeleton/SkeletonDetails";
import PayContributionModal from "../Components/Modals/PayContributionModal";
import { toast } from "react-toastify";

const IssueDetails = () => {
  const navigate = useNavigate();
  const { user, setLoader, loader } = useAuth();
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxiosInstance();
  const id = useParams();
  const [issue, setIssue] = useState({});
  const [update, setUpdate] = useState(true);
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosInstance.get(`/issues/${id.id}`).then((res) => {
      setIssue(res.data);
      setLoader(false);
      setLoading(false);

      axiosInstance.get(`/issues/contribution/${id.id}`).then((res) => {
        setContributions(res.data);
      });
    });
  }, [axiosInstance, id, setLoader, update]);

  if (loader) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Atom color="#0EA5E9" size="medium" text="" textColor="" />
      </div>
    );
  }

  const handelContribution = (e) => {
    e.preventDefault();
    const contribution = e.target.amount.value;
    const phone = e.target.phone.value;
    const date = new Date().toISOString();
    const newContribution = {
      paid_amount: contribution,
      image: issue.image,
      contributor_image: user?.photoURL,
      phone: phone,
      category: issue.category,
      date: date,
      title: issue.title,
      issue: issue._id,
      email: user?.email,
    };
    if (user) {
      axiosInstance.post("/contribution", newContribution).then((res) => {
        if (res.data.acknowledged) {
          document.getElementById(id.id).close();
          Swal.fire({
            title: "Congratulation on your Contribution",
            icon: "success",
            draggable: true,
          });
          setUpdate(!update);
        }
      });
    } else {
      toast.error("Please Login to contribute");
      navigate("/login");
    }
  };
  const openModal = (id) => {
    document.getElementById(id).showModal();
  };

  return (
    <div>
      <MotionHeading>
        Issues : <span className="heading-primary ">{issue.title}</span>
      </MotionHeading>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-10 transition-colors duration-300">
        <div className="w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-3xl">
          {loading ? (
            <SkeletonDetail />
          ) : issue ? (
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-1/2 relative">
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="w-full h-72 lg:h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-gradient-to-r from-sky-500 to-sky-400 text-white text-xs sm:text-sm md:text-base font-semibold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-md">
                  {issue.category}
                </span>
              </div>

              {/* Details Section */}
              <div className="lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                    {issue.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {issue.description}
                  </p>

                  {/* Grid Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="flex flex-col">
                      <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
                        <CiLocationOn /> Location
                      </span>
                      <span className="font-medium text-gray-800 dark:text-gray-200 break-words">
                        {issue.location}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
                        <BsHandbag /> Suggested Budget
                      </span>
                      <span className="font-semibold text-green-700 dark:text-green-400">
                        ৳ {issue.amount}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
                        📅 Reported On
                      </span>
                      <span className="text-gray-800 dark:text-gray-200">
                        {new Date(issue.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
                        📧 Reporter
                      </span>
                      <span className="font-medium text-gray-800 dark:text-gray-200 break-words">
                        {issue.email}
                      </span>
                    </div>
                  </div>

                  {/* Status */}
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      issue.status === "ongoing"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-300"
                        : "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-300"
                    }`}
                  >
                    {issue.status}
                  </span>
                </div>

                {/* Contribute Button */}
                <button
                  onClick={() => openModal(issue._id)}
                  className="mt-6 w-full bg-gradient-to-r from-sky-500 to-green-500 hover:from-sky-600 hover:to-green-600 text-white font-semibold py-2.5 rounded-lg transition duration-200 text-sm sm:text-base dark:shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                >
                  Pay Clean-Up Contribution
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center w-full py-20">
              <h1 className="text-4xl text-gray-600 dark:text-gray-300">
                No Issue Found
              </h1>
            </div>
          )}
        </div>
      </div>
      <div>
        <IssuesContribution contributions={contributions} />
      </div>
      <PayContributionModal
        issue={issue}
        user={user}
        handelContribution={handelContribution}
      />
    </div>
  );
};

export default IssueDetails;
