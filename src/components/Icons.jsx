import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
function Icons() {
  return (
    <div className='flex  '>
    <p className='text-xl m-1'> <FaInstagram/></p> 
  
     <p className='text-xl m-1'><FaFacebookF/></p>   
     <p className='text-xl m-1'> <CiLinkedin/></p>  
     <p className='text-xl m-1'><FaXTwitter/></p>   
    </div>
  )
}

export default Icons
