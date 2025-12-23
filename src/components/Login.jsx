import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

const Login = () => {
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const onSuccess = (token) => {
    Cookies.set("jwt_token", token, { expires: 30 });
    navigate("/", { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://hospitlybackend.onrender.com/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        onSuccess(data.token);
      } else {
        setMessage(data.message || "Sign in failed");
      }
    } catch (err) {
      setMessage("Server error",err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-110 p-8 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <div>
          <label htmlFor="email" className="block font-bold  mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block font-bold  mb-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
        </div>

        <div className="flex flex-col justify-between items-center">
          <p>If you don't have an account, please <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
          <button
          type="submit"
          className="w-40 mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Sign In
        </button>
         
        </div>

        {message && (
          <p className="mt-4 text-center text-md font-semibold text-red-600">{message}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
