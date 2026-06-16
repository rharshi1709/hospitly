import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Profile() {
  const userEmail = Cookies.get("user_email");
  const [appointment, setAppointment] = useState([]);

  const removeCookie = () => {
    Cookies.remove("jwt_token");
    Cookies.remove("user_email");
    alert("✅ Logout Successful");
    window.location.href = "/";
  };

  const email = Cookies.get("user_email");

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `https://hospitlybackend.onrender.com/api/appointment/${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setAppointment(data.data);
      } else {
        alert("Failed to fetch user data");
      }
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  });

  const upcomingAppointments = appointment.filter(
    (app) => new Date(app.date) >= new Date()
  );
  const pastAppointments = appointment.filter(
    (app) => new Date(app.date) < new Date()
  );

  return (
    <>
      <Navbar />

      {/* Header Section */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">My Profile</h1>
          <p className="text-lg text-blue-100">
            Manage your appointments and account information
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* USER INFO CARD */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-10">
              <h2 className="text-3xl font-bold text-white">Account Information</h2>
            </div>

            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                  👤
                </div>
                <div>
                  <p className="text-sm text-slate-500">Your Email</p>
                  <p className="text-xl font-semibold text-slate-900">{userEmail}</p>
                  <p className="text-sm text-green-600 font-medium mt-2">✓ Account Active</p>
                </div>
              </div>

              <button
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
                onClick={removeCookie}
              >
                Logout from Account
              </button>
            </div>
          </div>

          {/* UPCOMING APPOINTMENTS */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Upcoming Appointments</h2>

            {upcomingAppointments.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 border border-slate-200 text-center">
                <p className="text-slate-600 text-lg">
                  No upcoming appointments. <a href="/appointment" className="text-blue-600 font-semibold hover:text-blue-700">Book one now</a>
                </p>
              </div>
            ) : (
              <div className="grid gap-6">
                {upcomingAppointments.map((app, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600 hover:shadow-xl transition"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          Dr. {app.doctor}
                        </h3>
                        <p className="text-slate-600 mb-2">Specialization: <span className="font-semibold">{app.category}</span></p>
                        <p className="text-slate-600">Patient Name: <span className="font-semibold">{app.name}</span></p>
                      </div>

                      <div className="flex flex-col md:text-right space-y-2">
                        <span className="inline-flex items-center justify-center md:justify-end px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold">
                          📅 {app.date}
                        </span>
                        <span className="inline-flex items-center justify-center md:justify-end px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">
                          🕐 {app.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PAST APPOINTMENTS */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Past Appointments</h2>

            {pastAppointments.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 border border-slate-200 text-center">
                <p className="text-slate-600 text-lg">
                  No past appointments yet.
                </p>
              </div>
            ) : (
              <div className="grid gap-6">
                {pastAppointments.map((app, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-slate-400 opacity-75 hover:shadow-xl transition"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold text-slate-700 mb-2">
                          Dr. {app.doctor}
                        </h3>
                        <p className="text-slate-500 mb-2">Specialization: <span className="font-semibold">{app.category}</span></p>
                        <p className="text-slate-500">Patient Name: <span className="font-semibold">{app.name}</span></p>
                      </div>

                      <div className="flex flex-col md:text-right space-y-2">
                        <span className="inline-flex items-center justify-center md:justify-end px-4 py-2 bg-slate-200 text-slate-700 rounded-full font-semibold">
                          📅 {app.date}
                        </span>
                        <span className="inline-flex items-center justify-center md:justify-end px-4 py-2 bg-slate-100 text-slate-600 rounded-full font-semibold">
                          🕐 {app.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
