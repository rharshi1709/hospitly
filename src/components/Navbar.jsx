import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [btn, setbtn] = useState(false)

  return (
    <>
      {/* MOBILE NAV */}
      <div className="md:hidden">
        <div className="bg-white z-50 justify-between shadow-xl items-center flex w-full h-16 fixed top-0 px-4">
          <div className="flex items-center">
            <img
              className="w-10 h-10"
              src="https://media.istockphoto.com/id/1524913019/vector/hospital-building-vector-illustration-in-flat-style-design.jpg?s=612x612&w=0&k=20&c=WVl257GwZBvckU_e5SNu0CCG3gL9EbCMZPwINLcxdj4="
              alt="logo"
            />
            <p className="font-bold italic ml-1">h̼o̼s̼p̼i̼t̼l̼y̼</p>
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

        {btn ? (
          <div className="flex bg-amber-50 items-center text-lg mt-16 flex-col justify-center shadow-md">
            <Link to="/" className="m-2 text-gray-900 cursor-pointer">Home</Link>
            <Link to="/doctors" className="m-2 text-gray-900 cursor-pointer">Doctors</Link>
            <Link to="/appointments" className="m-2 text-gray-900 cursor-pointer">MyAppointments</Link>
            <Link to="/contact" className="m-2 text-gray-900 cursor-pointer">ContactUs</Link>
            <Link to="/about" className="m-2 text-gray-900 cursor-pointer">AboutUs</Link>
            <Link to="/profile" className="m-2 text-gray-900 cursor-pointer">Profile</Link>
          </div>
        ) : null}
      </div>

      {/* DESKTOP NAV */}
      <div className="md:flex hidden">
        <div className="bg-white z-50 justify-between shadow-xl items-center flex w-full h-16 fixed top-0 px-6">
          <div className="flex items-center">
            <img
              className="w-10 h-10"
              src="https://media.istockphoto.com/id/1524913019/vector/hospital-building-vector-illustration-in-flat-style-design.jpg?s=612x612&w=0&k=20&c=WVl257GwZBvckU_e5SNu0CCG3gL9EbCMZPwINLcxdj4="
              alt="logo"
            />
            <p className="font-bold italic ml-1">h̼o̼s̼p̼i̼t̼l̼y̼</p>
          </div>

          <div>
            <Link to="/" className="m-2 text-gray-900 cursor-pointer">Home</Link>
            <Link to="/doctors" className="m-2 text-gray-900 cursor-pointer">Doctors</Link>
            <Link to="/appointments" className="m-2 text-gray-900 cursor-pointer">MyAppointments</Link>
            <Link to="/contact" className="m-2 text-gray-900 cursor-pointer">ContactUs</Link>
            <Link to="/about" className="m-2 text-gray-900 cursor-pointer">AboutUs</Link>
            <Link to="/profile" className="m-2 text-gray-900 cursor-pointer">Profile</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
