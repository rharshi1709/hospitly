import React from 'react'
import Icons from './Icons'

function Footer() {
  return (
    <div className='bg-black p-6 flex mt-5 text-white justify-center items-center'>
      <div className='mr-5 w-full lg:w-100'>
        <div className='flex items-center '><img className='w-5 h-5' src="https://media.istockphoto.com/id/1524913019/vector/hospital-building-vector-illustration-in-flat-style-design.jpg?s=612x612&w=0&k=20&c=WVl257GwZBvckU_e5SNu0CCG3gL9EbCMZPwINLcxdj4="/>
      <p className='font-bold ml-2 '>Hospitly</p></div>
         <p className='font-bold '>🏡123 E Post Rd, White Plains, NY 10601, USA
</p>  <p className='font-bold '>📞Phone: +91 98765 43210
</p>  <p className='font-bold '> 📧Email: contact@hospitly.com
</p></div>
<div className='ml-3'>
<Icons/>
<h1 className='font-bold text-lg'>About Us</h1>
<p className='text-sm'>Our mission is to make healthcare accessible,<br/> convenient, and patient-friendly for everyone.</p>
<p>© 2025 Hospitly. All Rights Reserved.</p>
</div>
         </div>
   
  )
}

export default Footer
