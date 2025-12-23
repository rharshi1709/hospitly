import React from "react";

function AboutSection() {
  return (
    <div className="max-w-5xl mx-auto my-10 px-4 text-center">
      <h2 className="text-2xl font-bold mt-4 text-black">About Us</h2>
      <p className="text-gray-800 mb-4">
        Hospitly is committed to providing quality healthcare with 
        experienced doctors, modern equipment, and a patient-friendly approach.
      </p>
      <p className="text-gray-700 mb-6">
        Our mission is to make healthcare accessible and convenient for everyone.
      </p>
      <a 
        href="/about" 
        className="inline-block bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
      >
        Learn More
      </a>
    </div>
  );
}

export default AboutSection;
