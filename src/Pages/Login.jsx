import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import { toast } from "react-toastify";
import Container from "../Components/Container/Container";
import { FormCard } from "../Components/Card/Card";
import useRole from "../Hooks/useRole";

const Login = () => {
  const emailRef = useRef(null);
  const { role } = useRole();
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
  const predefinedUsers = {
    user: {
      email: "sehyfatet@mailinator.com",
      password: "sehyfatet@mailinator.coM",
    }, // replace with real
    admin: {
      email: "fucakocoj@mailinator.com",
      password: "fucakocoj@mailinator.coM",
    }, // replace with real
  };

  // Function to login as user/admin
  const loginAs = (role) => {
    const credentials = predefinedUsers[role];
    if (!credentials) return;

    setError("");
    setUser(null);
    signInWithEmailAndPasswordFunc(credentials.email, credentials.password)
      .then(() => {
        setLoader(false);
        if (role) {
          navigate(`/dashboard/${role}`);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.code);
        setLoader(false);
        toast.error("Login failed: " + err.message);
      });
  };

  const handelSignin = (e) => {
    setError("");
    setUser(null);
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPasswordFunc(email, password)
      .then(() => {
        setLoader(false);
        if (role === "admin") {
          navigate(`/dashboard/${role}`);
        } else if (role === "user") {
          navigate(`/dashboard/${role}`);
        } else {
          navigate("/");
        }
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
      <div className="flex items-center justify-center min-h-screen pt-10 transition-colors duration-300">
        <FormCard className="sm:w-[28rem] w-full text-center space-y-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          {/* Heading */}
          <h2 className="text-3xl heading-primary font-bold mb-2">Log in</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-sky-500 hover:underline">
              Sign up
            </Link>
          </p>

          {/* Social Login */}
          <div className="space-y-3">
            <button
              onClick={handelGoogleSingIn}
              className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
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
          <div className="flex items-center gap-4 my-6 text-gray-400 dark:text-gray-500">
            <div className="h-px bg-gray-300 dark:bg-gray-600 flex-1"></div>
            <span className="text-sm">Or</span>
            <div className="h-px bg-gray-300 dark:bg-gray-600 flex-1"></div>
          </div>

          {/* Form */}
          <form onSubmit={handelSignin} className="space-y-4 text-left">
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200"
            />

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                autoComplete="current-password"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button className="w-full border btn-primary font-semibold py-3 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-200">
              Log in
            </button>
            
            <hr className="border-gray-200 dark:border-gray-600" />
            
            <p className="text-center text-gray-600 dark:text-gray-400">Demo Credentials</p>
            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="btn btn-primary bg-sky-600 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-600 border-none text-white px-6 py-2 rounded-lg transition-colors duration-200"
                onClick={() => loginAs("user")}
              >
                User
              </button>
              <button
                type="button"
                className="btn btn-primary bg-sky-600 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-600 border-none text-white px-6 py-2 rounded-lg transition-colors duration-200"
                onClick={() => loginAs("admin")}
              >
                Admin
              </button>
            </div>
          </form>

          {/* Footer Links */}
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <button className="hover:underline hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">
              Forgot password?
            </button>
          </div>

          {/* Status Messages */}
          {user && (
            <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                Successfully Signed In
              </p>
            </div>
          )}
          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-600 dark:text-red-400 text-sm font-medium">{error}</p>
            </div>
          )}
        </FormCard>
      </div>
    </Container>
  );
};

export default Login;