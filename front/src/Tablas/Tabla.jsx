import { useNavigate } from "react-router-dom"

export default function Tabla(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/tablas/prueba');
    }   
    return(

    <div className="w-10/12 h-4/5 bg">
        <div className="flex justify-center items-center gap-16 bg">
                <div className="card">
                    <p className="heading">
                    tabla #9
                    </p>
                    <div className="flex justify-center items-center w11/12 h-9">
                    <button onClick={handleClick} className="button-card text-xl text-white">Ir</button>

                    </div>
                </div>
            </div>
    </div>
    
)
}