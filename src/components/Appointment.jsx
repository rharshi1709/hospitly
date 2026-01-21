import React from "react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Footer from "./Footer";

function Appointment() {
  const [categoryData, setCategoryData] = useState([]);
  const [allDoctors, setAllDoctors] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = Cookies.get("user_email");
      const userData = {
        name,
        phone,
        category: department,
        doctor,
        date,
        time,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData, email }),
      };

      const response = await fetch(
        "https://hospitlybackend.onrender.com/api/appointment",
        options
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // fetch categories
  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await fetch(
          "https://hospitlybackend.onrender.com/api/category"
        );
        const data = await response.json();
        setCategoryData(data.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchCategory();
  }, []);

  // fetch all doctors once
  useEffect(() => {
    async function fetchDoctors() {
      try {
        const response = await fetch(
          "https://hospitlybackend.onrender.com/api/doctors"
        );
        const data = await response.json();
        setAllDoctors(data.data);
        setDoctors(data.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchDoctors();
  }, []);

  // filter doctors when department changes
  useEffect(() => {
    if (!department) {
      setDoctors(allDoctors);
      return;
    }

    const filtered = allDoctors.filter(
      (doc) => doc.category === department
    );
    setDoctors(filtered);
  }, [department, allDoctors]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <form
            onSubmit={onSubmit}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-10"
          >
            <h2 className="text-3xl md:text-4xl text-center font-bold mb-3 text-blue-900">
              Book an Appointment
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Fill out the form below to book an appointment with a doctor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block font-bold mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-bold mb-2">Phone No</label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              {/* Department */}
              <div>
                <label className="block font-bold mb-2">Department</label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl bg-blue-50"
                >
                  <option value="">Select Department</option>
                  {categoryData.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Doctor */}
              <div>
                <label className="block font-bold mb-2">Doctor</label>
                <select
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl bg-blue-50"
                >
                  <option value="">Select Doctor</option>
                  {doctors.map((doc) => (
                    <option key={doc._id} value={doc.name}>
                      {doc.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block font-bold mb-2">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  className="w-full p-3 border border-gray-300 rounded-xl"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block font-bold mb-2">Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl"
                />
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Appointment;
