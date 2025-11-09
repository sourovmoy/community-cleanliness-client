import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="card bg-green-50 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h3 className="text-3xl font-bold text-center text-green-500">
            Login
          </h3>
          <form
          //   onSubmit={handelSignin}
          >
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                // ref={emailRef}
                type="email"
                name="email"
                className="input"
                placeholder="Your Email"
                required
              />
              <div className="relative">
                <label className="label">Password</label>
                <input
                  //   type={show ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                />
                <span
                  //   onClick={() => setShow(!show)}
                  className="absolute mt-3 right-8"
                >
                  {/* {show ? <FaEyeSlash /> : <FaEye />} */}
                </span>
              </div>
              <div>
                <Link
                  target="_blank"
                  to={"https://mail.google.com/mail/u/0/#inbox"}
                  type="button"
                  //   onClick={handelForgetPassword}
                  className="link link-hover"
                >
                  Forgot password?
                </Link>
              </div>
              <button className="btn bg-linear-to-r from-[#3b8132] to-[#72bf6a] hover:scale-105 mt-4">
                Login
              </button>
            </fieldset>
          </form>
          <Link to={"/auth/signup"}>
            Create New Account ?{" "}
            <span className="text-green-500">Registration</span>
          </Link>
          {/* {user && <p className="text-green-500">Successfully Sign In</p>}
          {error && <p className="text-red-500">{error}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default Login;
