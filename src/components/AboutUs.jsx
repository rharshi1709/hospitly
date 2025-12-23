import React from 'react'
import { FaUserMd, FaHeartbeat, FaLaptopMedical } from "react-icons/fa";
import Footer from './Footer';
import { FaMapMarkerAlt } from "react-icons/fa";

function AboutUs() {
    
     const team = [
    {
      name: "Dr. Ananya Rao",
      role: "Cardiologist",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Dr. Rohan Mehta",
      role: "Neurologist",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Pediatrician",
      img: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      name: "Dr. Arjun Nair",
      role: "Orthopedic Surgeon",
      img: "https://randomuser.me/api/portraits/men/48.jpg",
    },
  ];
  return (
    <div className='mt-15 overflow-x-hidden'>
        <img className='min-w-screen h-100' src='https://amcarehospital.com/wp-content/uploads/2023/12/Are-Hospitals-Making-as-Much-Money-as-You-Think1.jpg' />
        <div className='p-3'>
             <h1 className='text-4xl font-bold mt-7 text-blue-950 text-center'>Our Story</h1>
      <p className='text-lg m-2  mt-5 text-blue-950 text-start'>At Hospitly, delivering exceptional patient care and striving for excellence across every medical specialty has been our mission since the very beginning. Our facility stands as a trusted center for quality healthcare, designed to provide reliable, accessible, and compassionate services for every patient who walks through our doors.</p>
 <p className='text-lg m-2 mt-5 text-blue-950 text-start'>What truly sets us apart is not just our advanced medical care, but our commitment to people. At Hospitly, our doctors, nurses, and staff go beyond routine treatment — they listen, they understand, and they care. Every interaction is guided by empathy, trust, and the goal of making patients feel supported at every step of their journey.</p>
 <p className='text-lg m-2 mt-5 text-blue-950 text-start'>Being a doctor-led hospital is the foundation of who we are. It ensures that every decision is driven by medical expertise and patient well-being. Our dedication to innovation and modern technology allows us to offer safe, effective, and up-to-date treatments across various specialties.</p>
 <p className='text-lg m-2 mt-5 text-blue-950 text-start'>At Hospitly, healthcare is more than just treatment — it is about building lasting relationships of trust, healing, and hope. We believe in combining compassion with innovation, ensuring every patient receives care that is both personal and world-class.</p>
  <p className='text-lg m-2 mt-5 text-blue-950 text-start'>Welcome to Hospitly — where your health comes first, and every day we work to redefine what exceptional healthcare means.</p>
        </div>
         <div className='p-2'>
             <h1 className='text-4xl font-bold mt-7 text-blue-950 text-center'>
Vision, Mission & Core Values</h1>
<p className='m-3 text-blue-950 text-xl mt-5'><span className='font-semibold text-blue-950 text-2xl '>Our Vision</span> -- Build a healthcare organization that provides highest quality healthcare and allied services through a patient centric approach.</p>
      <p className='m-3 text-blue-950 text-xl mt-5'><span className='font-semibold text-blue-950 text-2xl '>Our Mission</span> -- Making our patients and their loved ones smile in the face of adversity by offering care filled with compassion and trust.</p>
      <p className='m-3 text-blue-950 text-xl mt-5'><span className='font-semibold text-blue-950 text-2xl '>Core Values</span> --  Expertise , Excellence and Empathy</p>

      </div>
       <div className="max-w-6xl mx-auto my-12 px-4">
      <h2 className="text-4xl font-bold mt-7 text-blue-950 text-center mb-5">Our Team</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-blue-50 rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
            />
            <h3 className="mt-4 font-semibold text-lg text-gray-800">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
    <div className='mt-4 p-3 mb-7'>
 <h1 className='text-4xl font-bold mt-7 text-blue-950 text-center mb-7'>Why Choose Us?</h1>
<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        
        <div className="bg-blue-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <FaUserMd size={30} className="text-blue-600" />
          <h3 className="mt-4 font-semibold text-lg text-gray-800">Expert Doctors</h3>
          <p className="text-sm text-gray-600 mt-2">
            Skilled specialists committed to your health and well-being.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <FaHeartbeat size={30} className="text-blue-600" />
          <h3 className="mt-4 font-semibold text-lg text-gray-800">Patient-Centric Care</h3>
          <p className="text-sm text-gray-600 mt-2">
            Compassionate and personalized care for every patient.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <FaLaptopMedical size={30} className="text-blue-600" />
          <h3 className="mt-4 font-semibold text-lg text-gray-800">Modern Technology</h3>
          <p className="text-sm text-gray-600 mt-2">
            Advanced equipment for accurate diagnosis and effective treatment.
          </p>
        </div>

      </div>
    </div>
    <div className='mb-5 p-3'>
<h1 className='text-4xl font-bold mt-7 text-blue-950 text-center mb-7'>Our Locations </h1>

      <div className="grid gap-6 sm:grid-cols-2">
        

    <a href="https://maps.app.goo.gl/m31XF6Z2hGFNHXMV8" target='_blank'  className="bg-blue-50 rounded-lg cursor-pointer shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <FaMapMarkerAlt size={30} className="text-blue-600" />
          <h3 className="mt-4 font-semibold text-lg text-gray-800">White Plains - Main Branch</h3>
          <p className="text-sm text-gray-600 mt-2">
            23 E Post Rd, <br />
            White Plains, NY 10601, USA
          </p>
        </a>

        <a href="https://maps.app.goo.gl/HrtLAd15MCmdf6Wt8" target='_blank' className="bg-blue-50 rounded-lg shadow-md p-6 cursor-pointer flex flex-col items-center text-center hover:shadow-lg transition">
          <FaMapMarkerAlt size={30} className="text-blue-600" />
          <h3 className="mt-4 font-semibold text-lg text-gray-800">White Plains - Central Ave</h3>
          <p className="text-sm text-gray-600 mt-2">
            200 Central Ave, <br />
            White Plains, NY 10606, USA
          </p>
        </a>

      </div>
    </div>
    <Footer/>
     </div>
  )
}

export default AboutUs
