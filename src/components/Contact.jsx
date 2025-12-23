import React from 'react'
import { useState } from 'react'

function Contact() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [message,setMessage]=useState('')
  const onSubmit=async(e)=>{
    e.preventDefault();
    try{
      const contactDetails={name,email,phone,message};
      const options={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(contactDetails)
      }
      const res= await fetch("http://localhost:1000/api/contact-us",options);
      const data= await res.json();
      console.log(data);
      if(res.ok){
        alert(`✅ ${data.message || "Message sent successfully!"}`);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }
      else{
        alert(`❌ ${data.message || "Failed to send message."}`);
      }
    }
    catch(err){
      console.log(err.message);
    }
  }
  return (
     <div className="max-w-4xl pt-2 shadow-2xl  mt-17 mx-auto my-10 p-10 ">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-950">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <form className="flex-1 bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-3 py-2 "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-3 py-2 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Phone</label>
            <input
              type="number"
              placeholder="+91 98765 43210"
              className="w-full border border-gray-300 rounded px-3 py-2 "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded px-3 py-2 "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={onSubmit}
            className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex-1 bg-blue-50 shadow-md rounded-lg p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <a href="https://maps.app.goo.gl/nomqvLDhfs7sp66i7" target='_blank' className="mb-2 cursor-pointer"><span className="font-semibold">Address:</span> 123 E Post Rd, White Plains, NY 10601, USA</a>
          <p className="mb-2"><span className="font-semibold">Phone:</span> +91 98765 43210</p>
          <p className="mb-2"><span className="font-semibold">Email:</span> contact@hospitalapp.com</p>
          <p className="text-gray-600 mt-4">
            We are here to answer your queries. Feel free to send us a message and we will get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
