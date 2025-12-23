import React from 'react'
import ServicesCard from './ServicesCard'
import DepartmentsCarousel from './DoctorCourosel'
import AboutSection from './AboutSection'
import Footer from './Footer'

function Home() {
  return (
    <>
    <div className="flex flex-col items-start pl-4 justify-center md:mt-15 min-h-screen min-w-full bg-[url('https://t3.ftcdn.net/jpg/14/73/30/96/360_F_1473309619_TbeIX0iphz6MuZ2kMANQI5CCxWWXo7ap.jpg')] 
            bg-cover bg-center h-[500px] overflow-hidden">
  {/* Dark overlay */}
  <div className="inset-0 bg-black/50"></div>
  
  <div className="">
    <h1 className='text-4xl font-bold text-[#ffffff]'>Welcome to Hospitly....</h1> {/* Soft blue */}
    <p className='text-lg mt-5 font-bold text-[#c3cbda]'>
      Hospitly is your trusted healthcare companion, helping you find top doctors, book appointments, and manage your health effortlessly. Experience quality care and convenience, all in one place.
    </p>
    <div>
      <button className='bg-transparent border-[#798086] border-2 text-[#ffffff] rounded-xl font-bold p-1 px-2 m-3'>
        Book an Appointment
      </button>
      <button className='bg-[#3d4146] px-2 rounded-xl text-[#ffffff] font-bold  p-1 m-3'>
        Find a Doctor
      </button>
    </div>
  </div>
</div>
<ServicesCard/>
<DepartmentsCarousel/>
<AboutSection/>
<Footer/>
    </>
  )
}

export default Home
