import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Doctors() {
  const [categoryData, setCategoryData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [doctors, setDoctors] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await fetch(
          `https://hospitlybackend.onrender.com/api/category`
        );
        const data = await response.json();
        setCategoryData(data.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchCategory();
  }, []);

  useEffect(() => {
    async function fetchDoctors() {
      try {
        let url = "";

        if (currentCategory === "all") {
          url = `https://hospitlybackend.onrender.com/api/doctors?name=${input}`;
        } else {
          url = `https://hospitlybackend.onrender.com/api/category/${currentCategory}?name=${input}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setDoctors(data.data);
        setLoading(false);
      } catch (err) {
        alert(err.message);
      }
    }
    fetchDoctors();
  }, [currentCategory, input]);

  return (
    <>
      <Navbar />

      <div className="mt-20 p-3 bg-gray-50 min-h-screen">
        <h1 className="text-center font-bold text-4xl mb-2 text-gray-800">
          Meet Our Doctors
        </h1>
        <h1 className="text-center font-semibold text-sm mb-5 text-gray-500">
          “Where healing meets excellence.”
        </h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:justify-between md:p-3">
          <div className="flex justify-center m-3 items-center">
            <p className="font-semibold text-gray-700 text-sm">
              Select a category :
            </p>
            <select
              className="bg-white shadow-sm p-2 ml-3 rounded-xl border border-gray-200 text-sm"
              onChange={(e) => setCurrentCategory(e.target.value)}
            >
              <option value="all">All</option>
              {categoryData.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-center m-3 items-center">
            <p className="font-semibold text-gray-700 text-sm">
              Search for doctor :
            </p>
            <input
              type="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Find by name"
              className="bg-white rounded-xl ml-2 mr-5 text-black w-60 h-10 p-2 border border-gray-200 shadow-sm text-sm"
            />
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center mt-10">
  {loading ? (
   <div className="flex justify-center items-center w-screen">
  <BeatLoader color="#3B82F6" size={15} />
</div>
  ) : (
    doctors.map((doc) => (
      <div key={doc._id} className="m-2">
        <div className="flex flex-col justify-center items-center bg-white p-5 rounded-2xl w-full shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105">
          <Link to={`/doctor/${doc._id}`}>
            <img
              className="w-32 h-32 rounded-2xl object-cover"
              src={doc.photo}
              alt="doctor"
            />
          </Link>

          <h1 className="text-md font-bold m-1 text-gray-800">
            Name: <span className="font-medium">{doc.name}</span>
          </h1>
          <h1 className="text-md font-bold m-1 text-gray-800">
            Category: <span className="font-medium">{doc.category}</span>
          </h1>
          <h1 className="text-md font-bold m-1 text-gray-800">
            Exp: <span className="font-medium">{doc.experience}</span>
          </h1>
          <h1 className="text-md font-bold m-1 text-gray-800">
            Phone: <span className="font-medium">{doc.phone}</span>
          </h1>

          <a
            href="/appointment"
            className="bg-blue-400 text-white p-2 mt-3 rounded-xl font-bold px-4 text-sm hover:bg-blue-500"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    ))
  )}
</div>


      
      </div>
      
<Footer/>
    </>
  );
}

export default Doctors;
