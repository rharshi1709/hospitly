import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import Navbar from './Navbar'

function HospitalDetails() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState("")
  const { id } = useParams()

  const fetchData = async () => {
    try {
      const response = await fetch(`https://hospitlybackend.onrender.com/api/hospitals/${id}`)
      const result = await response.json()
      console.log("Fetched hospital details:", result.data.doctors)
      setData(result.data.doctors)
      setLoading(false)
    } catch (err) {
      console.error("Error fetching hospital details:", err)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">

      <Navbar />

      {/* Added pt-24 to avoid overlap with fixed navbar */}
      <div className="pt-24 py-10 px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-800">
            Hospital Doctors
          </h1>
          <p className="text-gray-600 mt-2">
            Meet our experienced medical professionals
          </p>
        </div>

        {/* Search Input */}
        <div className="flex justify-center mb-10">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search doctor..."
            className="border border-blue-300 rounded-lg p-2 w-full max-w-md"
          />
        </div>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center items-center mt-20">
            <BeatLoader color="#2563EB" size={15} />
          </div>
        )}

        {/* No Doctors */}
        {!loading && data.length === 0 && (
          <p className="text-center text-gray-500 text-lg">
            No doctors available in this hospital.
          </p>
        )}

        {/* Doctors Grid */}
        {!loading && data.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data
              .filter(doc =>
                doc.name.toLowerCase().includes(value.toLowerCase())
              )
              .map((doc) => (
                <div
                  key={doc._id}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
                >
                  <Link >
                    <img
                      className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-100"
                      src={doc.photo}
                      alt={doc.name}
                    />
                  </Link>

                  <h2 className="text-xl font-semibold text-blue-700 mt-4">
                    {doc.name}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    🩺 {doc.category}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Experience: {doc.experience}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    📞 {doc.phone}
                  </p>

                  <Link
              to={`/hospitals/${id}/doctor/${doc.name}`}
                    className="block mt-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default HospitalDetails