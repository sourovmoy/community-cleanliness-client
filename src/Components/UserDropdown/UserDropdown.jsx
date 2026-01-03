import React from "react";
import { NavLink } from "react-router";
import useRole from "../../Hooks/useRole";

const UserDropdown = ({ user, handelSignOut }) => {
  const { role, roleLoader } = useRole();
  if (roleLoader)
    return <span className="loading loading-spinner loading-md"></span>;
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="">
        <img
          className="h-11 w-11 rounded-full outline-3 outline-sky-600"
          src={user?.photoURL}
          alt=""
          referrerPolicy="no-referrer"
        />
      </div>
      <ul
        tabIndex="-1"
        className="dropdown-content menu bg-base-100 rounded-box z-10 w-auto p-2 shadow-sm"
      >
        <li>
          <p className="font-semibold text-sky-400">{user?.displayName}</p>
        </li>
        <li>
          <p className="font-semibold text-sky-400">{user?.email}</p>
        </li>
        <hr />

        {role === "user" && (
          <li>
            <NavLink
              to="/dashboard/user"
              className="font-semibold text-sky-400 mt-5"
            >
              Dashboard
            </NavLink>
          </li>
        )}
        {role === "admin" && (
          <li>
            <NavLink
              to="/dashboard/admin"
              className="font-semibold text-sky-400 mt-5"
            >
              Dashboard
            </NavLink>
          </li>
        )}

        <li>
          <button
            onClick={handelSignOut}
            className="btn-primary mx-2 text-center"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
