import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function Navbar({tabla}){
    const [hoverRotate,setHoverRotate] = useState();
    return(
        <div className="w-full h-20  shadow-lg flex jus items-center justify-between px-4">
            <div className="text-4xl">{tabla.toUpperCase()}</div>
            <div >
            <input
            className=" bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-purple-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 w-96 h-10
             py-1 shadow-md focus:shadow-lg focus:shadow-purple-500"
            autocomplete="off"
            placeholder="Busca entre tus registros..."

            />
            </div>
            <button onMouseEnter={()=>{setHoverRotate(true)}} onMouseLeave={()=>{setHoverRotate(false)}} 
            className="rounded-lg bg-purple-500 w-16 h-16 text-white text-xl flex justify-center items-center">
                <FaPlus className={`w-8 h-8 ${hoverRotate ? `rotate-plus` : null}`} /></button>
        </div>
    )
}