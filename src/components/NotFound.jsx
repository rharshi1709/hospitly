import React from 'react'
import { useNavigate, } from 'react-router'

function NotFound() {
   const  navigate=useNavigate()
    const Home=()=>{
        navigate('/', {replace:true})
    }
  return (
    <div className='flex flex-col  overflow-y-hidden align-middle h-screen justify-center items-center mt-10 '>
          <h1 className='text-6xl text-blue-900 font-semibold italic'>Page-Not Found</h1>
      <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQ-ZIXhO1arS-WsgpGc8bLvKQDpAESgO5iQ&s" alt="Not Found" className='w-80 h-70 m-3'/>
      <p className='text-xl text-blue-900 font-semibold italic'>Sorry, the page you are looking for does not exist.</p>
        <button className='mt-5 bg-blue-300 p-2 rounded-xl font-bold text-white cursor-pointer' onClick={Home}>
Back to Home
      </button>
      </div>
    

  )
}

export default NotFound
