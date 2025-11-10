import React, { useEffect, useRef, useState } from "react";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import * as motion from "motion/react-client";

const MyIssues = () => {
  const { user } = useAuth();
  const [refresh, setRefresh] = useState(true);
  const [id, setId] = useState(null);
  const axiosInstance = useAxiosInstance();
  const [myIssues, setMyIssues] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/issues?email=${user?.email}`).then((res) => {
      setMyIssues(res.data);
    });
  }, [axiosInstance, user, setMyIssues, refresh]);

  const handelOpenModal = (id) => {
    setId(id);
    document.getElementById(id).showModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const amount = Number(e.target.amount.value);
    const status = "ongoing";
    const date = new Date().toISOString();
    const email = e.target.email.value;
    const _id = e.target.id.value;

    const updateIssue = {
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

    axiosInstance.patch(`/issues/${_id}`, updateIssue).then((res) => {
      console.log(res.data);

      if (res.data.acknowledged) {
        document.getElementById(id).close();
        setRefresh(!refresh);
      }
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Update it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Updated!",
            text: "Your file has been Updated.",
            icon: "success",
          });
        }
      });
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/issues/${id}`).then((res) => {
          if (res.data.acknowledged) {
            setRefresh(!refresh);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
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
        className="p-4 sm:p-8"
      >
        <h1 className="text-2xl font-bold text-center mb-6 heading-primary">
          My Submitted Issues
        </h1>
        {myIssues.length === 0 ? (
          <p className="text-center text-gray-500">No issues found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full bg-white rounded-xl overflow-hidden shadow-md">
              <thead className="bg-sky-700 text-white">
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myIssues.map((issue) => (
                  <tr key={issue._id} className="hover:bg-sky-50 items-center">
                    <td>
                      <img
                        src={issue.image}
                        alt={issue.title}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                    </td>
                    <td className="font-medium">{issue.title}</td>
                    <td>{issue.category}</td>
                    <td>${issue.amount}</td>
                    <td>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          issue.status === "ongoing"
                            ? "bg-yellow-200 text-yellow-800"
                            : "bg-green-200 text-green-800"
                        }`}
                      >
                        {issue.status}
                      </span>
                    </td>
                    <td className="flex flex-wrap gap-2 mt-4">
                      <button
                        onClick={() => handelOpenModal(issue._id)}
                        className="bg-sky-600 hover:bg-sky-700 text-white px-3 py-1 rounded-md text-sm"
                      >
                        Update
                      </button>

                      <dialog
                        id={issue._id}
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-sky-50 via-green-50 to-sky-100 px-4 py-8">
                            <form
                              onSubmit={handleSubmit}
                              className="w-full max-w-xl bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 md:p-10 space-y-6 border border-sky-100"
                            >
                              <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-sky-600">
                                Update Issue
                              </h2>
                              <input
                                type="hidden"
                                name="id"
                                value={issue._id}
                              />
                              <div>
                                <label className="block text-gray-700 mb-1 font-medium">
                                  Issue Title
                                </label>
                                <input
                                  type="text"
                                  name="title"
                                  defaultValue={issue.title}
                                  placeholder="e.g. Overflowing garbage near park"
                                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                                  required
                                />
                              </div>

                              <div>
                                <label className="block text-gray-700 mb-1 font-medium">
                                  Category
                                </label>
                                <select
                                  name="category"
                                  defaultValue={issue.category}
                                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-700"
                                  required
                                >
                                  <option value="">Select a Category</option>
                                  <option value="Garbage">Garbage</option>
                                  <option value="Broken Footpath">
                                    Broken Footpath
                                  </option>
                                  <option value="Illegal Dumping">
                                    Illegal Dumping
                                  </option>
                                  <option value="Waterlogging">
                                    Waterlogging
                                  </option>
                                </select>
                              </div>

                              <div>
                                <label className="block text-gray-700 mb-1 font-medium">
                                  Description
                                </label>
                                <textarea
                                  name="description"
                                  defaultValue={issue.description}
                                  placeholder="Describe the issue in detail..."
                                  rows="4"
                                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-400 resize-none"
                                  required
                                ></textarea>
                              </div>

                              <div>
                                <label className="block text-gray-700 mb-1 font-medium">
                                  Image URL
                                </label>
                                <input
                                  type="url"
                                  name="image"
                                  defaultValue={issue.image}
                                  placeholder="https://example.com/image.jpg"
                                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-700 placeholder-gray-400"
                                  required
                                />
                              </div>

                              <div>
                                <label className="block text-gray-700 mb-1 font-medium">
                                  Suggested Fix Budget (৳)
                                </label>
                                <input
                                  type="number"
                                  defaultValue={issue.amount}
                                  name="amount"
                                  placeholder="e.g. 500"
                                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-400"
                                  required
                                />
                              </div>

                              <div>
                                <label className="block text-gray-700 mb-1 font-medium">
                                  Reporter Email
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  value={user?.email}
                                  readOnly
                                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-gray-100 text-gray-500 cursor-not-allowed"
                                />
                              </div>

                              <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-green-600 to-sky-600 hover:from-green-700 hover:to-sky-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                              >
                                Submit Issue
                              </button>
                            </form>
                          </div>
                          <div className="modal-action">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn btn-primary border-0">
                                Cancel
                              </button>
                            </form>
                          </div>
                        </div>
                      </dialog>

                      <button
                        onClick={() => handleDelete(issue._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MyIssues;
