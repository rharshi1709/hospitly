import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MyCalendar from './calendar'
import Footer from './Footer'

function DetailedPage() {
  const [doctor, setDoctor] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function fetchDoctor() {
      try {
        const response = await fetch(`http://localhost:1000/api/doctor/${id}`)
        const data = await response.json()
        console.log("Fetched doctor data:", data)
        setDoctor(data.data)
      } catch (err) {
        console.error("Error fetching doctor:", err)
      }
    }
    if (id) fetchDoctor()
  }, [id])
// console.log(doctor.data.specialities)
  if (!doctor) return <p>Loading...</p>

  return (
    <div className='mt-18 p-2 flex flex-col justify-center items-center'>
<div className='bg-blue-50 flex flex-wrap lg:flex-nowrap items-center p-10 m-3 rounded-xl w-full shadow-md h-full'>
        <div className='flex flex-col justify-center '>
          <img className='w-60 h-60 mb-2 rounded-xl' src={doctor.photo}/>
             <h1 className='text-2xl font-bold m-1'>{doctor.name}</h1>
         <h1 className='text-md font-semibold m-1'>Sr. Consultant,<span className='ml-1'>{doctor.category}</span></h1>
        <p className='border border-black font-bold mt-3 text-lg p-2 rounded-xl  text-blue-500'> Rs. 800</p>
        </div>
        <div className='flex flex-col justify-start mt-6 lg:ml-15 align-text-top'>
          <p className='text-lg'><span className='font-bold text-lg'>Description: </span>{doctor.description}</p>
          <p className='text-lg mt-3'><span className='font-bold text-lg'>Specialities: </span></p>
          <ul className='mb-4'>
            {doctor.specialities.map((spec, index) => (
              <li key={index} className='text-md list-none border rounded-xl w-60 bg-gray-200 mt-5 p-2 ml-5 hover:bg-blue-800 hover:text-white'>{spec}</li>
            ))}
          </ul>
          <p><span className='font-bold '>Experience:</span></p>

           <p className='text-lg border p-2 mt-3 ml-10 w-50 rounded-xl'>{doctor.experience}</p>
        
        </div>
        <div className='items-center lg:ml-15 mt-10'>
          <MyCalendar/>
        </div>
       </div>
      <Footer/>
   
    </div>
  )
}

export default DetailedPage
