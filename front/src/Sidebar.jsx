import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { FaTableCellsLarge } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Sidebar(){
  const [navbar, setNavbar] = useState({type:'small'});
  const navigate = useNavigate();
  const validateNavbar = () =>{
    console.log(navbar);
    return navbar.type === 'big' ? true : false
  }
  const verClick = () => {
    if(navbar.type === 'small'){
      setNavbar({type:'big'})
    }else{
      setNavbar({type:'small'})
    } 
  }

  const handleClickTables = () => {
      navigate('/tablas')
  }

  return(
      <div className={ validateNavbar() ? 'h-screen w-20 bg-purple-500 shadow-custom-shadow rounded-lg flex flex-col items-center animation-navbar' : 'h-screen w-20 bg-purple-500 shadow-custom-shadow rounded-lg flex flex-col items-center animation-navbar2'}>
      <div onClick={verClick}  className={ validateNavbar() ? 'w-11/12 h-16 bg-purple-500 hover:bg-custom-purple2 rounded-xl flex items-center justify-center hover:cursor-pointer mt-3 div-back ':'w-11/12 h-16 mt-3 bg-purple-500 hover:bg-indigo-5 rounded-xl flex items-center justify-center hover:cursor-pointer '}>
         <IoIosArrowForward 
         color='white' 
         className={validateNavbar() ? 'w-16 h-16 animation-arrow ' : 'w-16 h-16'} 
      />
      {validateNavbar() ? <p className="text-white text-4xl opacity-0 animation-text">Back</p> : null }
      </div>
      <div className="h-5/6 w-11/12 mt-5 flex flex-col items-center">
      <div onClick={handleClickTables} className="w-11/12 h-16 bg-purple-500 hover:bg-custom-purple2 rounded-xl flex items-center justify-center hover:cursor-pointer gap-3">
      <FaTableCellsLarge
         color='white' 
         className={validateNavbar() ? 'w-6 h-6  ' : 'w-6 h-6'} 
      />
      {validateNavbar() ? <p className="text-white text-2xl opacity-0 animation-text">Tables</p> : null }
      </div>

      </div>
      </div>
    )
}


