import React from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const Profile = () => {
  const { user, updateProfileFunc, setLoader, loader, setUser } = useAuth();
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
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Avatar */}
        <p className="font-medium">
          <Link to="/" className="flex items-center gap-1">
            <FaArrowLeft /> Go to home
          </Link>
        </p>

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

          <h2 className="mt-4 text-xl font-semibold">
            {user?.displayName || "Your Name"}
          </h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Profile Photo</span>
            </label>
            <input
              name="photo"
              type="file"
              className="file-input file-input-md w-full"
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
