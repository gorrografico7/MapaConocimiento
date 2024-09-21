import './App.css'
// import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tablas from './Tablas/Tablas';
import Sidebar from './Sidebar';
import Login from './login';
import Read from './Tablas/Read/Read';

function App() {
      useEffect((()=>{
    }),
    []);

  return (
    <>
    <Router>
    <div className='h-screen w-screen flex '>
      <Sidebar></Sidebar>
      <Routes>
              <Route path='/tablas' element={<Tablas></Tablas>}></Route>  
              <Route path='/' element={<Login></Login>}></Route>  
              <Route path='/main' element={<App></App>}></Route>  
              <Route path='/tablas/:tabla' element={<Read></Read>}></Route>
          </Routes> 
    </div>
      </Router>
    </>
  )
}

export default App

{/* <div className='w-full h-20 bg-custom-gray2 rounded-md flex justify-center items-center'>
<div className='flex items-baseline'>
 <p className='text-6xl'>MP</p>
 <p className=''>texto ejemplo</p>
 </div> 
</div>
<div className='gap-4 pt-3 flex flex-col '>
 <div onMouseLeave={()=>{animationLogo(true,"leave")}} onMouseEnter={()=>{animationLogo(true,"enter")}}className='w-full bg-custom-gray1 h-14 hover:bg-custom-gray2 flex items-center justify-center'> 
   <p className='text-black text-2xl '>Tablas</p>  
   <div className={`w-8 h-8 bg-black right-32 relative ${isAnimated ? 'slide-right' : ''}`}></div>
 </div>
 <div className='w-full bg-custom-gray1 h-14 hover:bg-custom-gray2'> </div>
 <div className='w-full bg-custom-gray1 h-14 hover:bg-custom-gray2'> </div>
 <div className='w-full bg-custom-gray1 h-14 hover:bg-custom-gray2'> </div>

</div> */}