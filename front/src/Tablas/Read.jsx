import { useParams } from "react-router-dom"

export default function Read(){
    const { tabla } = useParams();
    return(
        <div className="h-screen w-screen">
            <div className="w-full h-20  shadow-lg flex jus items-center">
                <div className="text-4xl">{tabla.toUpperCase()}</div>
                <div >
                <input
                class="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-purple-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-purple-500"
                autocomplete="off"
                placeholder="Busca entre tus registros..."
                name="text"
                type="text"
                />
                </div>
                <div className="rounded-lg bg-purple-500 w-16 h-16 text-white text-4xl flex justify-center items-center">+</div>
            </div>
        </div>
    )
}