
import React, { useState } from "react";

const Register = () => {
  
const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const userDetails = { username, email, password };
        const options={
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails),
      }
      const res = await fetch("http://localhost:1000/api/signup", options);

      const data = await res.json();
      console.log(data)
      if (res.ok) {
        
        await alert(` ${data.message || "Signed up successfully!"}`);
        window.location.href = "/signin";
        setMessage("");
       

        
      } else {
        setMessage(`❌ ${data.message || "Sign in failed"}`);
      }
    } catch (err) {
        setMessage(err.message);
        
    }
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 mt-7">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full  max-w-md p-4 px-10 rounded-3xl shadow-2xl"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
          <p className="text-gray-600">Join us to get started</p>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-blue-50 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-blue-50 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-blue-50 transition"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition duration-200 shadow-md hover:shadow-lg"
        >
          Sign Up
        </button>

        {message && (
          <div className="mt-3 p-4 bg-gray-50 border-l-4 border-red-500 rounded text-sm text-gray-700">
            {message}
          </div>
        )}

        <div className="mt-3 text-center border-t pt-6">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-600 font-semibold hover:text-blue-700 transition">
              Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
