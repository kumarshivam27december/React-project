import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email) setErrEmail("Please enter your email.");
    if (!password) setErrPassword("Please create a password.");
    if (email && password) {
      setSuccessMsg(
        `Thank you for signing in! We are validating your access, and additional instructions will be sent to ${email}.`
      );
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-gradient-to-r from-green-500 to-teal-400 px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium text-yellow-50">
              Welcome back! Let's get you signed in.
            </h1>
            <p className="text-base text-yellow-100">We are happy to have you back!</p>
          </div>
          {["Fast sign-in with Glitch", "Exclusive Glitch features", "Trusted by thousands"].map((text, idx) => (
            <div key={idx} className="w-[300px] flex items-start gap-3">
              <span className="text-yellow-300 mt-1">
                <BsCheckCircleFill />
              </span>
              <p className="text-base text-yellow-100">
                <span className="text-white font-semibold font-titleFont">
                  {text}
                </span>
                <br />
                {idx === 0
                  ? "Easily access your personalized content and services!"
                  : idx === 1
                  ? "Get access to special deals and more with your account."
                  : "Join a growing community of users who trust Glitch."}
              </p>
            </div>
          ))}
          <div className="flex items-center justify-between mt-10">
            {["© Glitch", "Terms", "Privacy", "Security"].map((label) => (
              <Link key={label} to="/" className="text-sm font-titleFont font-semibold text-yellow-200 hover:text-white cursor-pointer duration-300">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2 h-full">
        {successMsg ? (
          <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
            <p className="w-full px-4 py-10 text-green-600 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signup">
              <button className="w-full h-10 bg-green-500 text-gray-200 rounded-md text-base font-titleFont font-semibold tracking-wide hover:bg-teal-600 hover:text-white duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-green-500">
              <h1 className="font-titleFont underline underline-offset-4 decoration-green-400 font-semibold text-3xl mdl:text-4xl mb-4 text-teal-700">
                Sign In to Glitch
              </h1>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="font-titleFont text-base font-semibold text-teal-700">
                    Email Address
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-300 outline-none"
                    type="email"
                    placeholder="user@gmail.com"
                  />
                  {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-titleFont text-base font-semibold text-teal-700">
                    Password
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-300 outline-none"
                    type="password"
                    placeholder="Enter password"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSignUp}
                  className="bg-green-500 hover:bg-teal-600 text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md duration-300"
                >
                  Sign In
                </button>
                <p className="text-sm text-center font-titleFont font-medium text-teal-700">
                  Don't have an Account?{" "}
                  <Link to="/signup">
                    <span className="hover:text-blue-600 duration-300">Sign up</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
