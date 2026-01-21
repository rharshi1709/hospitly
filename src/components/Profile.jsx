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
    window.location.href = "/signin";
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

      <div className="px-4 mt-16 py-6 md:px-20 md:py-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl md:text-4xl text-center font-bold mb-6 text-gray-800">
          Your Profile
        </h1>

        {/* USER INFO */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-6">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            User Info
          </h1>

          <p className="text-lg mb-2">
            <span className="font-semibold">📧 Email:</span> {userEmail}
          </p>

          <p className="text-lg flex items-center gap-2 text-green-600">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="font-semibold">Account Status:</span> Active
          </p>

          <button
            className="bg-red-500 text-white mt-4 px-5 py-3 rounded-xl hover:bg-red-600"
            onClick={removeCookie}
          >
            Logout
          </button>
        </div>

        {/* UPCOMING APPOINTMENTS */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-6">
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
            Upcoming Appointments
          </h1>

          {upcomingAppointments.length === 0 ? (
            <p className="italic text-gray-500">
              No upcoming appointments.
            </p>
          ) : (
            <div className="grid gap-4">
              {upcomingAppointments.map((app, index) => (
                <div
                  key={index}
                  className="border rounded-2xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-md transition bg-gray-50"
                >
                  <div className="mb-3 md:mb-0">
                    <p className="font-semibold text-lg text-gray-800">
                      Dr. {app.doctor}
                    </p>
                    <p className="text-gray-600 text-sm">{app.category}</p>
                  </div>

                  <div className="">
                    <p className="text-sm font-medium bg-green-100 text-green-700 px-4 py-2 rounded-full inline-block">
                      {app.date}
                    </p>
                    <p className="text-sm mt-2 text-gray-700">
                      ⏰ {app.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PAST APPOINTMENTS */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
            Past Appointments
          </h1>

          {pastAppointments.length === 0 ? (
            <p className="italic text-gray-500">
              No past appointments.
            </p>
          ) : (
            <div className="grid gap-4">
              {pastAppointments.map((app, index) => (
                <div
                  key={index}
                  className="border rounded-2xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50"
                >
                  <div className="mb-3 md:mb-0">
                    <p className="font-semibold text-lg text-gray-700">
                      Dr. {app.doctor}
                    </p>
                    <p className="text-gray-500 text-sm">{app.category}</p>
                  </div>

                  <div className="">
                    <p className="text-sm font-medium bg-gray-200 text-gray-700 px-4 py-2 rounded-full ">
                      {app.date}
                    </p>
                    <p className="text-sm mt-2 text-gray-600">
                      ⏰ {app.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
