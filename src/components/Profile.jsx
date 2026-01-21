import React from 'react'
import Cookies from 'js-cookie'
import Navbar from './Navbar';
function Profile() {
    const userEmail = Cookies.get("user_email");
    const removeCookie=()=>{
        Cookies.remove("jwt_token");
        Cookies.remove("user_email");
        alert("✅ Logout Successful");
        window.location.href='/signin';

    }
  return (

    <>
    <Navbar/>
     <div className=' flex justify-center flex-col  m-20'>

      <h1 className='text-3xl text-center font-bold mb-4'>Your Profile</h1>
       <div className="bg-white p-6 rounded-xl shadow-lg">
  <h1 className="text-2xl font-bold mb-4 text-gray-800">User Info</h1>

  <p className="text-lg mb-2">
    <span className="font-semibold">📧 Email:</span> {userEmail}
  </p>

  <p className="text-lg flex items-center gap-2 text-green-600">
    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
    <span className="font-semibold">Account Status:</span> Active
  </p>

  <button className="bg-red-500 text-white mt-4 px-4 py-2 rounded-lg" onClick={removeCookie}>
    Logout
  </button>
</div>
   <div className="bg-white mt-3 p-6 rounded-xl shadow-lg">
<h1 className="text-xl font-bold mb-4 text-gray-800">Upcoming Appointments</h1>
<p className='italic'>Comming soon......</p>
</div>
   <div className="bg-white mt-3 p-6 rounded-xl shadow-lg">
  <h1 className="text-xl font-bold mb-4 text-gray-800">Past Appointments</h1>
  <p className='italic'>Comming soon......</p>
</div>
    </div></>
   
  )
}

export default Profile
