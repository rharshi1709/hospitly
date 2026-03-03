import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Hospitals() {
  const [hospitals, setHospitals] = useState([])

  const fetchHospitals = async () => {
    try {
      const response = await fetch('https://hospitlybackend.onrender.com/api/hospitals')
      const data = await response.json()
      console.log('Fetched hospitals:', data.data)
      setHospitals(data.data)
    } catch (error) {
      console.error('Error fetching hospitals:', error)
    }
  }

  useEffect(() => {
    fetchHospitals()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      
      <Navbar />

      {/* Added padding-top to avoid overlap with fixed navbar */}
      <div className="pt-24 py-10">
        
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-2">
          Our Partner Hospitals
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Explore trusted hospitals and healthcare services
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {hospitals.map((hospital) => (
            <div
              key={hospital._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={hospital.image}
                alt={hospital.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold text-blue-700 mb-2">
                  {hospital.name}
                </h2>

                <p className="text-gray-600 mb-1">
                  📍 {hospital.location}
                </p>

                <p className="text-yellow-500 font-medium mb-1">
                  ⭐ {hospital.rating}
                </p>

                <p className="text-gray-500 text-sm mb-4">
                  Established: {hospital.established_year}
                </p>

                <Link
                  to={`/hospitals/${hospital._id}`}
                  className="block text-center w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Hospitals