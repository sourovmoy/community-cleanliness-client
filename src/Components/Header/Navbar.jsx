import React from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  const links = (
    <>
      <li className="font-semibold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/all-issues"}>All Issues</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/add-issues"}>Add Issues</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/my-issues"}>My Issues</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/my-contribution"}>My Contribution</NavLink>
      </li>
      {!user && (
        <>
          <li className="font-semibold">
            <Link
              to={"/login"}
              className="btn bg-gradient-to-r from-[#3b8132] to-[#72bf6a] hover:scale-105 mr-2"
            >
              Login
            </Link>
          </li>
          <li className="font-semibold">
            <Link
              to={"/register"}
              className="btn bg-gradient-to-r from-[#3b8132] to-[#72bf6a] hover:scale-105 "
            >
              Register
            </Link>
          </li>
        </>
      )}
      {user && (
        <Link className="btn bg-gradient-to-r from-[#3b8132] to-[#72bf6a] hover:scale-105">
          Logout
        </Link>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar shadow-sm px-3 sm:px-10 sticky bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow items-center"
            >
              {links}
            </ul>
          </div>
          <p className="text-xl">CCIRP</p>
        </div>
        <div className="navbar-end md:navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end md:hidden">
          {user && (
            <Link className="btn bg-gradient-to-r from-[#3b8132] to-[#72bf6a] hover:scale-105">
              Logout
            </Link>
          )}
          {!user && (
            <div>
              <Link
                to={"/login"}
                className="btn bg-gradient-to-r from-[#3b8132] to-[#72bf6a] hover:scale-105"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn bg-gradient-to-r from-[#3b8132] to-[#72bf6a] hover:scale-105"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
