import { IoIosArrowForward } from "react-icons/io";


export default function Sidebar(){
    return(
      <div className='h-screen w-20 bg-custom-purple shadow-custom-shadow rounded-sm flex flex-col items-center'>
      <div className='w-11/12 h-16 bg-custom-purple hover:bg-custom-purple2 rounded-xl flex items-center justify-center hover:cursor-pointer'>
      <IoIosArrowForward color='white' className='w-28 h-16'/>
        </div> 
      </div>
    )
}