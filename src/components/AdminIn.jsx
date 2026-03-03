import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AdminIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("admin_token");
    if (jwtToken) {
      navigate("/admin-dashboard", { replace: true });
    }
  }, [navigate]);

  const onSuccess = (token) => {
    Cookies.set("admin_token", token, { expires: 30 });
    Cookies.set("admin_email", email, { expires: 30 });
    alert("✅ Login Successful");
    navigate("/admin-dashboard", { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:1000/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
    console.log(res)
      const data = await res.json();
    console.log(data)
      if (res.ok) {
        onSuccess(data.token);
      } else {
        setMessage(data.message || "Admin sign-in failed");
      }
    } catch (err) {
      setMessage(err.message || "Server error");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Admin Login</h2>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded"
        >
          Sign In
        </button>

        {message && (
          <p className="mt-4 text-center font-semibold text-red-600">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default AdminIn;
