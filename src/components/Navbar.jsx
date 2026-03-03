import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

function Navbar() {
  const [btn, setbtn] = useState(false)

  return (
    <>
      {/* MOBILE NAV */}
      <div className="md:hidden">
        <div className="bg-white z-50 justify-between shadow-xl items-center flex w-full h-16 fixed top-0 px-4">
          <div className="flex items-center">
            <a href="/" className="font-bold italic ml-1">Ho̼s̼p̼i̼t̼l̼y̼</a>
          </div>

          <svg
            onClick={() => setbtn(!btn)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {btn && (
          <div className="flex bg-amber-50 items-center text-lg mt-16 flex-col justify-center shadow-md">
            <Link to="/" className="m-2">Home</Link>
            <Link to="/hospitals" className="m-2">Hospitals</Link>
             {Cookies.get("jwt_token") ?(<Link to="/appointment" className="m-2">BookAppointment</Link>):null }
            <Link to="/contact" className="m-2">Contact</Link>
            <Link to="/about" className="m-2">About</Link>

            {Cookies.get("jwt_token") ? (
              <Link to="/profile" className="m-2">👤</Link>
            ) : (
              <Link to="/signin" className="m-2">Login</Link>
            )}
          </div>
        )}
      </div>

      {/* DESKTOP NAV */}
      <div className="md:flex hidden">
        <div className="bg-white z-50 justify-between shadow-xl items-center flex w-full h-16 fixed top-0 px-6">
          <div className="flex items-center">
            <a href="/" className="font-bold italic ml-1">Ho̼s̼p̼i̼t̼l̼y̼</a>
          </div>

          <div>
            <Link to="/" className="m-2">Home</Link>
            <Link to="/hospitals" className="m-2">Hospitals</Link>
            {Cookies.get("jwt_token") ?(<Link to="/appointment" className="m-2">BookAppointment</Link>):null
            }
            
            <Link to="/contact" className="m-2">Contact</Link>
            <Link to="/about" className="m-2">About</Link>

            {Cookies.get("jwt_token") ? (
              <Link to="/profile" className="m-2">👤</Link>
            ) : (
              <Link to="/signin" className="m-2 bg-blue-800 p-1 px-2 text-center rounded-xl text-white">Login</Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar