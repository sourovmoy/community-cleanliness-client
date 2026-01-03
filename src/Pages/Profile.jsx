import React from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import useRole from "../Hooks/useRole";

const Profile = () => {
  const { user, updateProfileFunc, setLoader, loader, setUser } = useAuth();
  const { role } = useRole();
  const axiosPublic = useAxiosInstance();
  const axiosSecure = useAxiosSecure();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const name = e.target.name.value;
      const photo = e.target.photo.files[0];

      let photoLink = user?.photoURL;

      if (photo) {
        const formData = new FormData();
        formData.append("image", photo);

        const uri = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGEBB_API
        }`;

        const imgRes = await axiosPublic.post(uri, formData);
        photoLink = imgRes.data.data.display_url;
      }

      const userData = {
        displayName: name || user?.displayName,
        photoURL: photoLink || user?.photoURL,
      };
      await axiosSecure.patch(`/user/${user?.email}/update`, userData);
      await updateProfileFunc(userData.displayName, userData.photoURL);
      toast.success("Profile updated successfully 🎉");
      setUser({ ...user, ...userData });
    } catch (error) {
      console.error(error);
      toast.error("Profile update failed ❌");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="flex justify-center px-4 py-10 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        {/* Back Link */}
        <p className="font-medium text-gray-700 dark:text-gray-300 mb-4">
          <Link to="/" className="flex items-center gap-1 hover:text-primary">
            <FaArrowLeft /> Go to home
          </Link>
        </p>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/5r0b7L5/user-placeholder.png"
                }
                alt="Profile"
              />
            </div>
          </div>
          <p
            className={`font-bold ${
              role === "admin" ? "text-yellow-500" : "text-green-500"
            }`}
          >
            {role}
          </p>
          <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
            {user?.displayName || "Your Name"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user?.email}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">
                Full Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">
                Profile Photo
              </span>
            </label>
            <input
              name="photo"
              type="file"
              className="file-input file-input-md w-full file-input-bordered bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
              accept="image/*"
            />
          </div>

          <button disabled={loader} className="btn btn-primary w-full">
            {loader ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
