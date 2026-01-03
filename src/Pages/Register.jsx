import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Container from "../Components/Container/Container";
import useAxiosInstance from "../Hooks/useAxiosInstance";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Register = () => {
  const axios = useAxiosInstance();
  const axiosSec = useAxiosSecure();
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
    const displayName = e.target.name.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have an Uppercase, Lowercase, Lowercase letter in the password"
      );
      return;
    }
    const photo = e.target.photo?.files[0];
    const formData = new FormData();
    formData.append("image", photo);

    const uri = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGEBB_API
    }`;
    axios.post(uri, formData).then((res) => {
      const photoURL = res.data.data.display_url;
      const userData = {
        displayName,
        email,
        photoURL,
      };
      setLoader(true);
      axiosSec.post("/user", userData).then(() => {});
      createUserWithEmailAndPasswordFunc(email, password)
        .then((res) => {
          toast("Successfully Sign Up");
          navigate("/");
          e.target.reset();
          updateProfileFunc(displayName, photoURL)
            .then(() => {
              setLoader(false);
              setUser({ ...res.user, displayName, photoURL });
            })
            .catch((err) => {
              toast.error(err.message);
            });
        })
        .catch((err) => {
          setLoader(false);
          if (err.code === "auth/email-already-in-use") {
            toast.error("This Email is already used");
          }
        });
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
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <Container>
      <div className="flex justify-center items-center my-10 px-4">
        <div className="w-full max-w-md">
          <div className="card bg-transparent shadow-2xl border border-gray-200/30 rounded-2xl">
            <div className="card-body text-center">
              {/* Heading */}
              <h2 className="text-3xl font-bold text-sky-700">
                Create Account
              </h2>
              <p className="text-sm text-gray-500 mt-1 mb-6">
                Already have an account?{" "}
                <Link to="/login" className="text-sky-600 hover:underline">
                  Log in
                </Link>
              </p>

              {/* Google Sign Up */}
              <button
                onClick={handelSignInWithGoogle}
                className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition font-medium"
              >
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.6 20.1H42V20H24v8h11.3C33.7 32.1 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.4 2.9l5.7-5.7C33.6 6.7 28.9 5 24 5 12.4 5 3 14.4 3 26s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.6-.4-3.9z"
                  />
                </svg>
                Log in with Google
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="text-gray-500 text-sm">or</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              {/* Registration Form */}
              <form
                onSubmit={handelRegistration}
                className="space-y-4 text-left"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="input input-bordered w-full"
                />

                <input
                  name="photo"
                  type="file"
                  placeholder="Photo URL"
                  required
                  className="file-input file-input-md w-full"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  autoComplete="username"
                  required
                  className="input input-bordered w-full"
                />

                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    className="input input-bordered w-full pr-10"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <button className="btn btn-primary w-full hover:scale-105 transition">
                  Register
                </button>
              </form>

              {/* Messages */}
              {user && (
                <p className="text-green-500 text-sm mt-4">
                  Successfully Signed Up 🎉
                </p>
              )}
              {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
