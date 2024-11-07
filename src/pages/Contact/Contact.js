import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // Error states
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  // Email validation
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your Name");
    }
    if (!email) {
      setErrEmail("Enter your Email");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("Enter a Valid Email");
      }
    }
    if (!messages) {
      setErrMessages("Enter your Messages");
    }
    if (clientName && email && EmailValidation(email) && messages) {
      setSuccessMsg(
        `Thank you dear ${clientName}, Your messages have been received successfully. Further details will be sent to you via email at ${email}.`
      );
    }
  };

  return (
    <div className="max-w-container mx-auto px-4 bg-black text-green-300 rounded-lg p-6 shadow-lg">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} className="text-cyan-400" />
      {successMsg ? (
        <p className="text-center font-semibold text-green-400 bg-black p-4 rounded-lg">
          {successMsg}
        </p>
      ) : (
        <form onSubmit={handlePost} className="bg-black p-6 rounded-lg shadow-md border border-green-600">
          <h1 className="font-titleFont text-3xl text-cyan-400 font-semibold mb-6">Fill out the Form</h1>
          <div className="flex flex-col gap-8">
            {/* Name Field */}
            <div>
              <p className="text-base font-titleFont text-green-400 mb-2">Name</p>
              <input
                onChange={handleName}
                value={clientName}
                className="w-full py-3 bg-gray-800 border-b-2 border-lime-500 text-green-300 placeholder-gray-500 outline-none focus:border-lime-400 transition-all"
                type="text"
                placeholder="Enter your name here"
              />
              {errClientName && (
                <p className="text-red-500 text-sm mt-2">{errClientName}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <p className="text-base font-titleFont text-green-400 mb-2">Email</p>
              <input
                onChange={handleEmail}
                value={email}
                className="w-full py-3 bg-gray-800 border-b-2 border-lime-500 text-green-300 placeholder-gray-500 outline-none focus:border-lime-400 transition-all"
                type="email"
                placeholder="Enter your email here"
              />
              {errEmail && (
                <p className="text-red-500 text-sm mt-2">{errEmail}</p>
              )}
            </div>

            {/* Messages Field */}
            <div>
              <p className="text-base font-titleFont text-green-400 mb-2">Messages</p>
              <textarea
                onChange={handleMessages}
                value={messages}
                className="w-full py-3 bg-gray-800 border-b-2 border-lime-500 text-green-300 placeholder-gray-500 outline-none focus:border-lime-400 transition-all resize-none"
                placeholder="Enter your message here"
              />
              {errMessages && (
                <p className="text-red-500 text-sm mt-2">{errMessages}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-cyan-600 text-black font-semibold rounded-lg hover:bg-cyan-500 duration-200 mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
