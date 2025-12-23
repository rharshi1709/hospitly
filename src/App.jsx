
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'
import Doctors from './components/Doctors'
import DetailedPage from './components/DetailedPage'
import NotFound from './components/NotFound'
import Register from './components/Register'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
 

  return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
       <Route path='/contact' element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
       <Route path='/about' element={<ProtectedRoute><AboutUs/></ProtectedRoute>}/>
       <Route path='/signup' element={<Register/>}/>
       <Route path='/signin' element={<Login/>}/>
         <Route path='/doctors' element={<ProtectedRoute><Doctors/></ProtectedRoute>}/>
          <Route path='*' element={<NotFound/>}/>
            <Route path='/doctor/:id' element={<ProtectedRoute><DetailedPage/></ProtectedRoute>}/>
   </Routes>
    </>
  )
}

export default App
