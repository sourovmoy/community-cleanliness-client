import React from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, signOutFunc, loader } = useAuth();
  const links = (
    <>
      <li className="font-semibold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/all-issues"}>All Issues</NavLink>
      </li>
      {user && (
        <>
          <li className="font-semibold">
            <NavLink to={"/add-issues"}>Add Issues</NavLink>
          </li>
          <li className="font-semibold">
            <NavLink to={"/my-issues"}>My Issues</NavLink>
          </li>
          <li className="font-semibold">
            <NavLink to={"/my-contribution"}>My Contribution</NavLink>
          </li>
        </>
      )}
    </>
  );
  const handelSignOut = () => {
    signOutFunc().then().catch();
  };
  return (
    <div>
      <div className="navbar shadow-sm px-3 sm:px-10 sticky">
        <div className="navbar-start">
          <div className="dropdown ">
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
          <p className="text-xl sm:text-2xl font-bold">
            C<span className="heading-primary">C&I</span>RP
          </p>
        </div>
        <div className="navbar-end sm:navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">
            {links}
            {loader ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : user ? (
              <Link onClick={handelSignOut} className="btn-primary">
                Logout
              </Link>
            ) : (
              <div>
                <Link to={"/login"} className="btn-primary mr-2">
                  Login
                </Link>
                <Link to={"/register"} className="btn-primary">
                  Register
                </Link>
              </div>
            )}
          </ul>
        </div>
        <div className="navbar-end sm:hidden">
          {loader ? (
            <span className="loading loading-spinner  loading-md"></span>
          ) : user ? (
            <Link onClick={handelSignOut} className="btn-primary">
              Logout
            </Link>
          ) : (
            <div>
              <Link to={"/login"} className="btn-primary mr-2">
                Login
              </Link>
              <Link to={"/register"} className="btn-primary">
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
