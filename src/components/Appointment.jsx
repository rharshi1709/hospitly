import React from 'react'
import Navbar from './Navbar'

function Appointment() {
  return (
    <>
    <Navbar/>
      <div className='mt-20'>
        <form className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-blue-950">Book an Appointment</h2>
          <p>Fill out the form below to book an appointment with a doctor.</p>
        </form>
      </div>

    </>
  )
}

export default Appointment
