import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [isAnimated, setIsAnimated] = useState(false);
  
    const animationLogo = (bool,ver)=>{
      if(ver==="enter"){
        setIsAnimated(true);
        console.log(isAnimated);
      }if(ver==="leave"){
        setIsAnimated(false);
        console.log(isAnimated);
      }
    }
    useEffect((()=>{
    }),
    []);

  return (
    <>
      <div className='h-screen w-64 bg-custom-gray shadow-custom-shadow rounded-sm'>
        <div className='w-full h-20 bg-custom-gray2 rounded-md flex justify-center items-center'>
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

        </div>
      </div>
    </>
  )
}

export default App
