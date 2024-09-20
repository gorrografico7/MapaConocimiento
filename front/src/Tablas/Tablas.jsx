import Tabla from "./Tabla"

export default function Tablas(){
    return(
     <div className="h-full w-screen flex justify-center items-center bg overflow-auto  scrollbar-thumb-purple-400 scrollbar-thin scrollbar-track-zinc-100">
        <Tabla></Tabla>
     </div>

    )
}