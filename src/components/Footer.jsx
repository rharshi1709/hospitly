import React from 'react'
import Icons from './Icons'

function Footer() {
  return (
    <div className="w-full bg-black p-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-6">
        
        <div className="w-full lg:w-1/2">
          <div className="flex items-center">
            <img
              className="w-6 h-6"
              src="https://media.istockphoto.com/id/1524913019/vector/hospital-building-vector-illustration-in-flat-style-design.jpg?s=612x612&w=0&k=20&c=WVl257GwZBvckU_e5SNu0CCG3gL9EbCMZPwINLcxdj4="
              alt="logo"
            />
            <p className="font-bold ml-2 text-lg">Hospitly</p>
          </div>

          <p className="font-semibold mt-3 text-sm">
            🏡 123 E Post Rd, White Plains, NY 10601, USA
          </p>
          <p className="font-semibold text-sm">📞 Phone: +91 98765 43210</p>
          <p className="font-semibold text-sm">📧 Email: contact@hospitly.com</p>
        </div>

        <div className="w-full lg:w-1/2">
          <Icons />

          <h1 className="font-bold text-lg mt-3">About Us</h1>
          <p className="text-sm mt-2">
            Our mission is to make healthcare accessible, <br />
            convenient, and patient-friendly for everyone.
          </p>

          <p className="text-sm mt-4">
            © 2025 Hospitly. All Rights Reserved.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Footer
