import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import { toast } from "react-toastify";
import Container from "../Components/Container/Container";

const Login = () => {
  const emailRef = useRef(null);

  const navigate = useNavigate();
  const axiosInstance = useAxiosInstance();
  const {
    setLoader,
    error,
    signInWithPopupFunc,
    setUser,
    setError,
    user,
    signInWithEmailAndPasswordFunc,
  } = useAuth();
  const [show, setShow] = useState(false);
  console.log(user);

  const handelSignin = (e) => {
    setError("");
    setUser(null);
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPasswordFunc(email, password)
      .then(() => {
        setLoader(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.code);

        if (err.code === "auth/invalid-credential") {
          toast.error("Please register first");
        }
        setLoader(false);
      });
  };

  const handelGoogleSingIn = () => {
    setUser(null);
    setError("");
    signInWithPopupFunc()
      .then((res) => {
        const newUser = {
          name: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
        };
        navigate("/");
        axiosInstance.post("/user", newUser).then((res) => {
          if (res.data.insertedId) {
            setUser(res.data);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "You have been Successfully Registered",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <Container>
      <div className="flex items-center justify-center px-4 py-10">
        <div className="sm:w-[30vw] w-full text-center  shadow-2xl rounded-2xl p-8">
          {/* Heading */}
          <h2 className="text-3xl heading-primary font-bold mb-2">
            Log in to Riverside
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Don’t have an account?{" "}
            <Link to="/register" className="text-purple-400 hover:underline">
              Sign up
            </Link>
          </p>

          {/* Social Login */}
          <div className="space-y-3">
            <button
              onClick={handelGoogleSingIn}
              className="w-full flex items-center justify-center gap-3 transition rounded-xl py-3 font-medium shadow-xl bg-neutral-800 hover:bg-neutral-700 text-white"
            >
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.6 20.1H42V20H24v8h11.3C33.7 32.1 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.4 2.9l5.7-5.7C33.6 6.7 28.9 5 24 5 12.4 5 3 14.4 3 26s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.6-.4-3.9z"
                />
              </svg>
              Log in with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6 text-gray-500">
            <div className="h-px bg-gray-700 flex-1"></div>
            <span className="text-sm">Or</span>
            <div className="h-px bg-gray-700 flex-1"></div>
          </div>

          {/* Form */}
          <form onSubmit={handelSignin} className="space-y-4 text-left">
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded-xl bg-neutral-800 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                autoComplete="current-password"
                className="w-full rounded-xl  px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button className="w-full btn-primary transition text-white font-semibold py-3 rounded-xl">
              Log in
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 space-y-2 text-sm">
            <button className="text-gray-400 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Status Messages */}
          {user && (
            <p className="text-green-400 text-sm mt-4">
              Successfully Signed In
            </p>
          )}
          {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
        </div>
      </div>
    </Container>
  );
};

export default Login;
