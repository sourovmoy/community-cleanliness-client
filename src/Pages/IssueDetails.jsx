import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../Hooks/useAuth";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import { Atom } from "react-loading-indicators";
import * as motion from "motion/react-client";
import Swal from "sweetalert2";
import IssuesContribution from "../Components/IssuesContribution/IssuesContribution";

const IssueDetails = () => {
  const { user, setLoader, loader } = useAuth();
  const axiosInstance = useAxiosInstance();
  const id = useParams();
  const [issue, setIssue] = useState({});
  const [update, setUpdate] = useState(true);
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/issues/${id.id}`).then((res) => {
      setIssue(res.data);
      setLoader(false);

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
  };
  const openModal = (id) => {
    document.getElementById(id).showModal();
  };

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="text-center text-3xl font-bold mt-5 sm:mt-10"
      >
        Issues : <span className="heading-primary ">{issue.title}</span>
      </motion.h1>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-10  transition-colors duration-300">
        <div className="w-full max-w-4xl  shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl border border-gray-200 dark:border-gray-700">
          <div className="relative">
            <img
              src={issue?.image}
              alt={issue?.title}
              className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover"
            />
            <span className="absolute top-4 left-4 bg-gradient-to-r from-sky-500 to-sky-400 text-white text-xs sm:text-sm md:text-base font-semibold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-md">
              {issue.category}
            </span>
          </div>
          <div className="p-5 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-gray-800 dark:text-white text-center sm:text-left">
              {issue.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base leading-relaxed text-center sm:text-left">
              {issue.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div className="flex flex-col">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  📍 Location
                </span>
                <span className="font-medium text-gray-800 dark:text-gray-200 break-words">
                  {issue.location}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  💰 Suggested Budget
                </span>
                <span className="font-semibold text-green-700 dark:text-green-400">
                  ৳ {issue.amount}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  📅 Reported On
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  📧 Reporter
                </span>
                <span className="font-medium text-gray-800 dark:text-gray-200 break-words">
                  {issue.email}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
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

            <button
              onClick={() => openModal(issue?._id)}
              className="w-full bg-gradient-to-r from-sky-500 to-green-500 hover:from-sky-600 hover:to-green-600 text-white font-semibold py-2.5 rounded-lg transition duration-200 text-sm sm:text-base dark:shadow-[0_0_15px_rgba(56,189,248,0.5)]"
            >
              Pay Clean-Up Contribution
            </button>
          </div>
          <dialog
            id={issue?._id}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-lg w-full mx-auto transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent">
                  Contribute to Clean-Up
                </h2>

                <form onSubmit={handelContribution} className="space-y-5">
                  <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-1 text-sm font-medium">
                      Issue Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={issue?.title}
                      readOnly
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-1 text-sm font-medium">
                      Amount (৳)
                    </label>
                    <input
                      type="number"
                      defaultValue={issue?.amount}
                      name="amount"
                      placeholder="e.g. 250"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-1 text-sm font-medium">
                      Contributor Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      readOnly
                      defaultValue={user?.displayName}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-1 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      readOnly
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-1 text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 017XXXXXXXX"
                      pattern="[0-9]{11}"
                      maxLength="11"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-1 text-sm font-medium">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="e.g. Banani, Dhaka"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-1 text-sm font-medium">
                      Date
                    </label>
                    <p className="px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-1 text-sm font-medium">
                      Additional Info (optional)
                    </label>
                    <textarea
                      name="additionalInfo"
                      rows="3"
                      placeholder="Any notes or message..."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-sky-500 focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-sky-500 to-green-500 hover:from-sky-600 hover:to-green-600 transition duration-300 shadow-lg hover:shadow-sky-500/30 dark:shadow-green-500/20"
                  >
                    Submit Contribution
                  </button>
                </form>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Go Back</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div>
        <IssuesContribution contributions={contributions} />
      </div>
    </div>
  );
};

export default IssueDetails;
