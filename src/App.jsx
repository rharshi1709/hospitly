
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'
import Doctors from './components/Doctors'
import DetailedPage from './components/DetailedPage'
import NotFound from './components/NotFound'
import Register from './components/Register'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './components/Profile'
import Appointment from './components/Appointment'
import AdminIn from './components/AdminIn'
import Hospitals from './components/Hospitals'
import AdminDashboard from './components/AdminDashboard'
import HospitalDetails from './components/HospitalDetails'
function App() {
 

  return (
    <>
  
   <Routes>
    <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about' element={<AboutUs/>}/>
       <Route path='/signup' element={<Register/>}/>
       <Route path='/signin' element={<Login/>}/>
         {/* <Route path='/doctors' element={<ProtectedRoute><Doctors/></ProtectedRoute>}/> */}
          <Route path='*' element={<NotFound/>}/>
            <Route path='/hospitals/:id/doctor/:name' element={<DetailedPage/>}/>
            <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
            <Route path='/appointment' element={<ProtectedRoute><Appointment/></ProtectedRoute>}/>
            <Route path='/admin' element={<AdminIn/>}/>
            <Route path="/hospitals" element={<Hospitals/>}/>
            <Route path="/hospitals/:id" element={<HospitalDetails/>}/>
            <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
   </Routes>
    </>
  )
}

export default App
