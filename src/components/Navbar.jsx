import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

function Navbar() {
  const [btn, setbtn] = useState(false)

  return (
    <>
      {/* MOBILE NAV */}
      <div className="md:hidden">
        <div className="fixed top-0 w-full h-16 flex justify-between items-center px-4 
                        bg-white/70 backdrop-blur-md shadow-sm z-50">

          <Link to="/" className="font-bold italic text-lg tracking-wide">
            Hospitly
          </Link>

          <svg
            onClick={() => setbtn(!btn)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {btn && (
          <div className="mt-16 flex flex-col items-center bg-white shadow-md py-4 space-y-3">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/hospitals" className="hover:text-blue-600 transition">Hospitals</Link>

            {Cookies.get("jwt_token") && (
              <Link to="/appointment" className="hover:text-blue-600 transition">
                Book Appointment
              </Link>
            )}

            <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>

            {Cookies.get("jwt_token") ? (
              <Link to="/profile" className="text-xl">👤</Link>
            ) : (
              <Link
                to="/signin"
                className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex">
        <div className="fixed top-0 w-full h-16 flex justify-between items-center px-10
                        bg-white/70 backdrop-blur-md shadow-sm z-50">

          <Link to="/" className="font-bold italic text-lg tracking-wide">
            Hospitly
          </Link>

          <div className="flex items-center space-x-6 font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/hospitals" className="hover:text-blue-600 transition">Hospitals</Link>

            {Cookies.get("jwt_token") && (
              <Link to="/appointment" className="hover:text-blue-600 transition">
                Book Appointment
              </Link>
            )}

            <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>

            {Cookies.get("jwt_token") ? (
              <Link to="/profile" className="text-xl">👤</Link>
            ) : (
              <Link
                to="/signin"
                className="bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar