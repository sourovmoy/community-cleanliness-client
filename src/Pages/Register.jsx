import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    signInWithPopupFunc,

    setUser,
    setError,
    error,
    user,
    setLoader,
  } = useAuth();
  const handelRegistration = (e) => {
    setUser(null);
    setError("");
    e.preventDefault();
    const displayName = e.target.name?.value;
    const email = e.target.email?.value;
    const photoURL = e.target.photo?.value;
    const password = e.target.password?.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    const photoURLRegex = /^https:\/\/.*\.(png|jpg|jpeg|gif|webp|svg)$/i;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have an Uppercase, Lowercase, Lowercase letter in the password"
      );
      return;
    }
    if (!photoURLRegex.test(photoURL)) {
      toast.error("Inter Correct ImageURL");
      return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        toast("Successfully Sign Up");
        navigate("/");
        e.target.reset();
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            setLoader(false);
            setUser(res.user);
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        setLoader(false);
        setError(err.message);
      });
  };

  const handelSignInWithGoogle = () => {
    setUser(null);
    setError("");
    signInWithPopupFunc()
      .then((res) => {
        setUser(res.user);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div>
      <div className="flex justify-center items-center my-5">
        <div className="card bg-transparent w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body bg-sky-50">
            <h3 className="text-3xl font-bold text-center text-sky-700">
              Registration
            </h3>
            <form onSubmit={handelRegistration}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Your Name"
                  required
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="Your Photo URL"
                  required
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Your Email"
                  autoComplete="username"
                  required
                />
                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute mt-3 right-8"
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <button className="btn border-0 btn-primary hover:scale-105 mt-4">
                  Login
                </button>
              </fieldset>
            </form>
            <Link to={"/login"}>
              Already Have an Account ?{" "}
              <span className="text-sky-700">Log in</span>
            </Link>
            {user && <p className="text-green-500">Successfully Sign Up</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="flex justify-between items-center">
              <p className="border-b ml-14"></p>
              <p className="text-center">or</p>
              <p className="border-b mr-14"></p>
            </div>
            <div className="flex justify-center mt-5">
              <button
                onClick={handelSignInWithGoogle}
                className="btn text-black border-[#e5e5e5] w-full bg-sky-100"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
