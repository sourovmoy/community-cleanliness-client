import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, signOutFunc, loader } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const links = (
    <>
      <li className="font-semibold text-sky-400">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-semibold text-sky-400">
        <NavLink to={"/all-issues"}>All Issues</NavLink>
      </li>
      {user && (
        <>
          <li className="font-semibold text-sky-400">
            <NavLink to={"/add-issues"}>Add Issues</NavLink>
          </li>
          <li className="font-semibold text-sky-400">
            <NavLink to={"/my-issues"}>My Issues</NavLink>
          </li>
          <li className="font-semibold text-sky-400">
            <NavLink to={"/my-contribution"}>My Contribution</NavLink>
          </li>
        </>
      )}
    </>
  );
  const handelSignOut = () => {
    signOutFunc()
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  const handelTheme = (e) => {
    const toggle = e.target.checked;
    setTheme(toggle ? "dark" : "light");
  };
  return (
    <div className="navbar shadow-sm px-3 sm:px-10 z-20">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box bg-sky-100 mt-3 w-40 p-2 shadow items-center gap-2"
          >
            {links}
          </ul>
        </div>

        <Link to={"/"} className="text-xl sm:text-2xl font-bold">
          C<span className="heading-primary">C&I</span>RP
        </Link>
      </div>

      <div className="navbar-center sm:navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center gap-2">
          <input
            onClick={handelTheme}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />

          {links}

          {loader ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : user ? (
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
                  <p className="font-semibold text-sky-400">
                    {user?.displayName}
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-sky-400">{user?.email}</p>
                </li>
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
          ) : (
            <>
              <Link to="/login" className="btn-primary mr-2">
                Login
              </Link>
              <Link to="/register" className="btn-primary">
                Register
              </Link>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end lg:hidden">
        {loader ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <img
                className="h-11 w-11 rounded-full outline-3 outline-sky-600"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-10 p-2 shadow-sm"
            >
              <div className="flex justify-between mx-4">
                <p className=" text-sky-400 font-semibold">Theme</p>
                <input
                  onClick={handelTheme}
                  type="checkbox"
                  defaultChecked={localStorage.getItem("theme") === "dark"}
                  className="toggle"
                />
              </div>
              <li>
                <p className="font-semibold text-sky-400">
                  {user?.displayName}
                </p>
              </li>
              <li>
                <p className="font-semibold text-sky-400">{user?.email}</p>
              </li>
              <li>
                <Link onClick={handelSignOut} className="btn-primary">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <input
              onClick={handelTheme}
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle"
            />
            <Link to="/login" className="btn-primary ml-2 mr-2">
              Login
            </Link>
            <Link to="/register" className="btn-primary">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
