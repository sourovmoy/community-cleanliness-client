import React from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import * as motion from "motion/react-client";

const AddIssues = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosInstance = useAxiosInstance();
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const category = e.target.category.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const amount = Number(e.target.amount.value);
    const status = "ongoing";
    const date = new Date().toISOString();
    const email = e.target.email.value;

    const newIssue = {
      title,
      category,
      location,
      description,
      image,
      amount,
      status,
      date,
      email,
    };

    axiosInstance.post("/issues", newIssue).then(() => {
      Swal.fire({
        title: "Do you want to submit this issue?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Submit",
        denyButtonText: `Cancel`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Issue Reported Successfully!", "", "success");
          e.target.reset();
          navigate("/my-issues");
        } else if (result.isDenied) {
          Swal.fire("Submission canceled", "", "info");
        }
      });
    });
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mt-6 "
        >
          Add <span className="heading-primary">Issues</span>
        </motion.h1>
        <div className="flex justify-center items-center min-h-screen  p-4">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg shadow-lg rounded-2xl p-8 space-y-5"
          >
            <h2 className="text-2xl font-semibold heading-primary mb-4 text-center">
              Report an Issue
            </h2>

            <div>
              <label className="block text-gray-600 mb-1">Issue Title</label>
              <input
                type="text"
                name="title"
                placeholder="e.g. Overflowing garbage near park"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Category</label>
              <select
                name="category"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer transition-all duration-300"
                required
              >
                <option value="">Select a Category</option>
                <option value="Garbage">Garbage</option>
                <option value="Broken Footpath">Broken Footpath</option>
                <option value="Illegal Dumping">Illegal Dumping</option>
                <option value="Waterlogging">Waterlogging</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Location</label>
              <input
                type="text"
                name="location"
                placeholder="e.g. Mohakhali, Dhaka"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Description</label>
              <textarea
                name="description"
                placeholder="Describe the issue in detail..."
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Image URL</label>
              <input
                type="url"
                name="image"
                placeholder="https://example.com/image.jpg"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">
                Suggested Fix Budget (৳)
              </label>
              <input
                type="number"
                name="amount"
                placeholder="e.g. 500"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Reporter Email</label>
              <input
                type="email"
                name="email"
                value={user?.email}
                readOnly
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary hover:scale-105 text-white font-semibold py-2.5 rounded-lg transition-all"
            >
              Submit Issue
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AddIssues;
