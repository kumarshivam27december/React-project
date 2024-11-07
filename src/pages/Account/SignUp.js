import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";

const SignUp = () => {
  // ============= Initial State Start here =============
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState(false);
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errCountry, setErrCountry] = useState("");
  const [errZip, setErrZip] = useState("");
  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setErrAddress("");
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    setErrCity("");
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
    setErrCountry("");
  };
  const handleZip = (e) => {
    setZip(e.target.value);
    setErrZip("");
  };
  // ============= Event Handler End here ===============
  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handleSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) {
        setErrClientName("Enter your name");
      }
      if (!email) {
        setErrEmail("Enter your email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Enter a Valid email");
        }
      }
      if (!phone) {
        setErrPhone("Enter your phone number");
      }
      if (!password) {
        setErrPassword("Create a password");
      } else {
        if (password.length < 6) {
          setErrPassword("Passwords must be at least 6 characters");
        }
      }
      if (!address) {
        setErrAddress("Enter your address");
      }
      if (!city) {
        setErrCity("Enter your city name");
      }
      if (!country) {
        setErrCountry("Enter the country you are residing");
      }
      if (!zip) {
        setErrZip("Enter the zip code of your area");
      }
      // ============== Getting the value ==============
      if (
        clientName &&
        email &&
        EmailValidation(email) &&
        password &&
        password.length >= 6 &&
        address &&
        city &&
        country &&
        zip
      ) {
        setSuccessMsg(
          `Hello dear ${clientName}, Welcome you to Glitch Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
        );
        setClientName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setAddress("");
        setCity("");
        setCountry("");
        setZip("");
      }
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-start bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-[#1a1a1a] px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium text-cyan-400">
              Get started for free
            </h1>
            <p className="text-base text-gray-300">Create your account to access more</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Get started fast with Glitch
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Access all Glitch services
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Trusted by online Shoppers
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              © Glitch
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Terms
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Privacy
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Security
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signin">
              <button
                className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont text-2xl mdl:text-3xl text-cyan-400 mb-4 font-semibold">
                Create your account
              </h1>
              <div className="flex flex-col gap-3">
                {/* client name */}
                <div className="flex flex-col gap-1">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Full Name
                  </p>
                  <input
                    onChange={handleName}
                    value={clientName}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full h-12 px-4 rounded-md text-sm text-white border-[1px] border-gray-600 bg-transparent 
                    focus:outline-none focus:border-cyan-400"
                  />
                  {errClientName && (
                    <span className="text-xs text-red-500">{errClientName}</span>
                  )}
                </div>

                {/* email */}
                <div className="flex flex-col gap-1">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Email
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12 px-4 rounded-md text-sm text-white border-[1px] border-gray-600 bg-transparent 
                    focus:outline-none focus:border-cyan-400"
                  />
                  {errEmail && (
                    <span className="text-xs text-red-500">{errEmail}</span>
                  )}
                </div>

                {/* phone */}
                <div className="flex flex-col gap-1">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Phone
                  </p>
                  <input
                    onChange={handlePhone}
                    value={phone}
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full h-12 px-4 rounded-md text-sm text-white border-[1px] border-gray-600 bg-transparent 
                    focus:outline-none focus:border-cyan-400"
                  />
                  {errPhone && (
                    <span className="text-xs text-red-500">{errPhone}</span>
                  )}
                </div>

                {/* password */}
                <div className="flex flex-col gap-1">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Password
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    type="password"
                    placeholder="Create a password"
                    className="w-full h-12 px-4 rounded-md text-sm text-white border-[1px] border-gray-600 bg-transparent 
                    focus:outline-none focus:border-cyan-400"
                  />
                  {errPassword && (
                    <span className="text-xs text-red-500">{errPassword}</span>
                  )}
                </div>

                {/* address */}
                <div className="flex flex-col gap-1">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Address
                  </p>
                  <input
                    onChange={handleAddress}
                    value={address}
                    type="text"
                    placeholder="Enter your address"
                    className="w-full h-12 px-4 rounded-md text-sm text-white border-[1px] border-gray-600 bg-transparent 
                    focus:outline-none focus:border-cyan-400"
                  />
                  {errAddress && (
                    <span className="text-xs text-red-500">{errAddress}</span>
                  )}
                </div>

                {/* city */}
                <div className="flex flex-col gap-1">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    City
                  </p>
                  <input
                    onChange={handleCity}
                    value={city}
                    type="text"
                    placeholder="Enter your city"
                    className="w-full h-12 px-4 rounded-md text-sm text-white border-[1px] border-gray-600 bg-transparent 
                    focus:outline-none focus:border-cyan-400"
                  />
                  {errCity && (
                    <span className="text-xs text-red-500">{errCity}</span>
                  )}
                </div>

                {/* country */}
                <div className="flex flex-col gap-1">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Country
                  </p>
                  <input
                    onChange={handleCountry}
                    value={country}
                    type="text"
                    placeholder="Enter your country"
                    className="w-full h-12 px-4 rounded-md text-sm text-white border-[1px] border-gray-600 bg-transparent 
                    focus:outline-none focus:border-cyan-400"
                  />
                  {errCountry && (
                    <span className="text-xs text-red-500">{errCountry}</span>
                  )}
                </div>

                {/* zip */}
                <div className="flex flex-col gap-1">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Zip Code
                  </p>
                  <input
                    onChange={handleZip}
                    value={zip}
                    type="text"
                    placeholder="Enter your zip code"
                    className="w-full h-12 px-4 rounded-md text-sm text-white border-[1px] border-gray-600 bg-transparent 
                    focus:outline-none focus:border-cyan-400"
                  />
                  {errZip && (
                    <span className="text-xs text-red-500">{errZip}</span>
                  )}
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2 mt-4">
                  <input
                    onChange={() => setChecked(!checked)}
                    type="checkbox"
                    id="agree"
                    checked={checked}
                    className="w-4 h-4 text-cyan-400"
                  />
                  <label htmlFor="agree" className="text-xs text-gray-300">
                    I agree to the{" "}
                    <span className="text-cyan-400">Terms of service</span> and{" "}
                    <span className="text-cyan-400">Privacy Policy</span>
                  </label>
                </div>

                {/* SignUp Button */}
                <div className="mt-6">
                  <button
                    onClick={handleSignUp}
                    className="w-full h-12 bg-cyan-400 rounded-md text-white text-base font-semibold font-titleFont tracking-wide hover:bg-cyan-500 duration-300"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
