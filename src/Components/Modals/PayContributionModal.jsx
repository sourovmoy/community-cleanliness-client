import React from "react";

const PayContributionModal = ({ issue, user, handelContribution }) => {
  return (
    <dialog id={issue?._id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="p-6 sm:p-8  dark:bg-gray-900 max-w-lg w-full mx-auto transition-all duration-300">
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
              className="w-full py-3 rounded-lg font-semibold text-white btn-primary transition duration-300 shadow-lg hover:shadow-sky-500/30 dark:shadow-green-500/20"
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
  );
};

export default PayContributionModal;
