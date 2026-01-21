import React from "react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

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
        setDoctors(data.data); // show all initially
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchDoctors();
  }, []);

  // filter doctors when department changes
  useEffect(() => {
    if (!department) {
      setDoctors(allDoctors); // show all if no department selected
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
      <div className="mt-20">
        <form className="max-w-4xl flex flex-col justify-center mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl text-center font-bold mb-2 text-blue-950">
            Book an Appointment
          </h2>
          <p className="text-center">Fill out the form below to book an appointment with a doctor.</p>

       <div className="mt-3 shadow-lg rounded-2xl p-4 ">
           {/* Name */}
          <div>
            <label htmlFor="name" className="block font-bold mt-4">
              Name:
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </label>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block font-bold mt-4">
              Phone No:
              <input
                id="phone"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </label>
          </div>

         <div className="flex mt-3 mb-3">
           {/* Department */}
          <div className="mr-5">
            <label htmlFor="department" className="block font-bold mt-4">
              Department:
              <select
                className="bg-blue-50 shadow-lg p-2 ml-3 rounded-xl"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">Select Department</option>
                {categoryData.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Doctor */}
          <div>
            <label htmlFor="doctor" className="block font-bold mt-4">
              Doctor:
              <select
                className="bg-blue-50 shadow-lg p-2 ml-3 rounded-xl"
                id="doctor"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
              >
                <option value="">Select Doctor</option>
                {doctors.map((doc) => (
                  <option key={doc._id} value={doc._id}>
                    {doc.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
         </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block font-bold mt-4">
              Date:
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </label>
          </div>

          {/* Time */}
          <div>
            <label htmlFor="time" className="block font-bold mt-4">
              Time:
              <input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div className="flex justify-center">
            <button  type="submit" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Submit
            </button>
          </div>
       </div>
        </form>
      </div>
    </>
  );
}

export default Appointment;
