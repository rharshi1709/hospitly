import React, { useState } from 'react'
import { useEffect } from 'react'
import { BeatLoader } from 'react-spinners'
import { Link } from 'react-router'

function Doctors() {
    const [categoryData , setCategoryData]=useState([])
    const [currentCategory , setCurrentCategory]=useState('all')
    const [doctors , setDoctors]=useState([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function fetchCategory(){
            try{
             const response =await fetch(`https://hospitlybackend.onrender.com/api/category`)
            const data =await  response.json()
            console.log(data.data)
            setCategoryData(data.data)
                
            }
            catch(err){
                console.log(err.message)
            }
        }
        fetchCategory()
    },[])
     useEffect(()=>{
        async function fetchDoctors(){
            
           try {
                if (currentCategory==='all'){
             const response =await fetch(`https://hospitlybackend.onrender.com/api/doctors?name=${input}`)
            const data =await  response.json()
            setDoctors(data.data)
            setLoading(false)
           }
           else{
         const response =await fetch(`https://hospitlybackend.onrender.com/api/category/${currentCategory}?name=${input}`)
            const data =await  response.json()
            console.log(data.data)
            setDoctors(data.data)
            setLoading(false)
           }
            }
            catch(err){
              alert(err.message)
            }
        }
        fetchDoctors()
    },[currentCategory, input])

  return (
    <div className='mt-20 p-3'>
      
      <h1 className='text-center font-bold text-4xl mb-2'>Meet Our Doctors</h1>
  <h1 className='text-center font-semibold text-sm mb-5'>“Where healing meets excellence.”</h1>
      <div className="flex flex-col  md:flex-row md:justify-between md:p-3">
<div className='flex justify-center m-3 items-center'> <p className='font-semibold border-0'>Select a category :</p><select className='bg-blue-100 shadow-lg p-2 ml-3 rounded-xl' onChange={(e)=>{
  console.log(e.target.value)
  setCurrentCategory(e.target.value)
 }} id="department" name="department">
    <option className='bg-white' selected value="cardiology">All</option>
    {categoryData.map((cat)=>{
  return <option className='bg-white' value={cat}>{cat}</option>
    })}
  </select></div>
<div className='flex justify-center m-3 items-center' >
<p className='font-semibold'>Search for doctor :</p>
  <input type='search' value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='Find by name' className='bg-blue-100 rounded-xl ml-2 mr-5 text-black w-60 h-10 p-2'/>

</div>
  
      </div>
      <div className='flex flex-wrap justify-center items-center mt-10'>
    {loading ? <BeatLoader color="#BBDEFB" />
 :
    doctors.map((doc) => {
      console.log(doc)
      return <div>
     <div
  key={doc._id}
  className="flex flex-col justify-center items-center bg-blue-100 p-4 rounded-2xl w-70 h-full m-3
             animate-fadeUp transition-transform duration-300 hover:scale-105 hover:shadow-xl"
>
       <Link to={`/doctor/${doc._id}`} ><img className='w-25 h-25 rounded-2xl' src={doc.photo} alt='image'/></Link>
          
        <h1 className='text-md font-bold m-1'>Name: <span className='font-medium'>{doc.name}</span></h1>
        <h1 className='text-md font-bold m-1'>Category: <span className='font-medium'>{doc.category}</span></h1>
         <h1 className=' text-md  font-bold m-1'>Expierience: <span className= 'font-medium'>{doc.experience}</span></h1>
        <h1 className='text-md  font-bold m-1'>Contact: <span className='font-medium'>{doc.phone}</span></h1>
          <button className='bg-blue-400 p-2 mt-3 rounded-xl font-bold text-white px-3'>Book an Appointment</button>
         </div>


     
     
      </div>
    })
    }

      </div>
    </div>
  )
}

export default Doctors
