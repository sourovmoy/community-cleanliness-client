import React, { useState } from "react";
import useAxiosInstance from "../../Hooks/useAxiosInstance";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const IssueCard = ({ issue }) => {
  const { user } = useAuth();
  const axiosInstance = useAxiosInstance();
  const [id, setId] = useState(null);
  const handelModal = (id) => {
    setId(id);
    document.getElementById(id).showModal();
  };

  const handelContribution = (e) => {
    e.preventDefault();
    const contribution = e.target.amount.value;
    const date = new Date().toISOString();
    const newContribution = {
      paid_amount: contribution,
      image: issue.image,
      category: issue.category,
      date: date,
      title: issue.title,
      issue: issue._id,
      email: user?.email,
    };

    axiosInstance.post("/contribution", newContribution).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire({
          title: "Congratulation on your Contribution",
          icon: "success",
          draggable: true,
        });
        document.getElementById(id).close();
      }
    });
  };

  return (
    <div>
      <div className="text-base-200 bg-gradient-to-r from-sky-900 to-sky-600 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 h-auto md:h-[65vh]">
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
            <button
              onClick={() => handelModal(issue._id)}
              className="flex items-center gap-2 bg-sky-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-sky-700 transition-all duration-200"
            >
              See Details
            </button>
          </div>
        </div>
      </div>

      <dialog id={issue._id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-sky-50 to-green-50 shadow-xl rounded-2xl overflow-hidden mt-10 transition-all duration-300 hover:shadow-2xl">
            <div className="relative">
              <img
                src={issue.image}
                alt={issue.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <span className="absolute top-4 left-4 bg-gradient-to-r from-[#3b8132] to-[#72bf6a] text-white text-xs sm:text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                {issue.category}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800">
                {issue.title}
              </h2>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                {issue.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">📍 Location</span>
                  <span className="font-medium ">{issue.location}</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">
                    💰 Suggested Budget
                  </span>
                  <span className="font-semibold text-green-700">
                    ৳ {issue.amount}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">📅 Reported On</span>
                  <span className="font-medium text-gray-800">
                    {new Date(issue.date).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">📧 Reporter</span>
                  <span className="font-medium text-gray-800">
                    {issue.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-3">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    issue.status === "ongoing"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {issue.status}
                </span>
              </div>
              <div>
                <form onSubmit={handelContribution}>
                  <label className="block text-gray-700 mb-1 font-medium">
                    Make a Contribution (৳)
                  </label>
                  <input
                    type="number"
                    defaultValue={issue.amount}
                    name="amount"
                    placeholder="e.g. 500"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-400"
                    required
                  />
                  <button className="btn-primary w-full mt-2">
                    Your contribution
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary">Go Back</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default IssueCard;
