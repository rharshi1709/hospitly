import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MyCalendar from './calendar'
import Footer from './Footer'
import { BeatLoader } from 'react-spinners'
import Navbar from './Navbar'

function DetailedPage() {
  const [doctor, setDoctor] = useState(null)
  const { id, name } = useParams()

  useEffect(() => {
    async function fetchDoctor() {
      try {
        const response = await fetch(`http://localhost:1000/api/hospitals/${id}/doctor/${name}`)
        const data = await response.json()
        setDoctor(data)
      } catch (err) {
        console.error("Error fetching doctor:", err)
      }
    }
    if (id) fetchDoctor()
  }, [id])

  if (!doctor)
    return (
      <div className="flex justify-center items-center h-screen">
        <BeatLoader />
      </div>
    )

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-20 px-6 flex justify-center">

        <div className="w-full max-w-7xl">

          {/* Doctor Hero Section */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-14 flex flex-col lg:flex-row gap-16 items-center relative overflow-hidden min-h-[480px]">

            {/* Background Glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>

            {/* Doctor Image */}
            <div className="relative z-10 flex-shrink-0">
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="w-72 h-72 object-cover rounded-3xl shadow-2xl border-4 border-white"
              />
            </div>

            {/* Doctor Details */}
            <div className="flex-1 relative z-10">

              <h1 className="text-5xl font-bold text-gray-800">
                {doctor.name}
              </h1>

              <p className="text-blue-600 text-xl font-semibold mt-3">
                {doctor.designation}
              </p>

              <p className="text-gray-500 mt-2 text-lg">
                {doctor.qualification}
              </p>

              {/* Specialities */}
              <div className="mt-6 flex flex-wrap gap-4">
                {doctor.specialities.map((spec, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold shadow-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <p className="mt-8 text-gray-700 leading-relaxed text-lg max-w-3xl">
                {doctor.description}
              </p>

              {/* Info Row */}
              <div className="mt-10 flex gap-16">

                <div>
                  <p className="text-gray-500 text-sm">Experience</p>
                  <p className="font-semibold text-2xl mt-1">
                    {doctor.experience}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Consultation Fee</p>
                  <p className="font-bold text-3xl text-blue-700 mt-1">
                    ₹ {doctor.fees}
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Booking Section */}
          <div className="mt-16 bg-white rounded-3xl shadow-2xl p-14">

            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
              Book Appointment
            </h2>

            <div className="flex flex-col lg:flex-row justify-center items-start gap-16">

              {/* Calendar */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-inner">
                <MyCalendar />
              </div>

              {/* Confirm Section
              <div className="flex flex-col items-center justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-12 py-5 rounded-2xl text-xl font-semibold shadow-xl hover:scale-105 transition-all duration-300">
                  Confirm Appointment
                </button>
              </div> */}

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default DetailedPage