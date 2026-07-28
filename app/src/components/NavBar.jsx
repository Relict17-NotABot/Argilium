import { useState } from "react"

export function NavBar() {
    // El estado debe vivir dentro del componente
    const [selecionado, setSelecionado] = useState(0)

    return (
        <header className="flex flex-row items-center p-4">
            <h1 className="text-2xl font-bold">Argilium</h1>

            <div className="flex-1 flex flex-row justify-end gap-3">
                <p 
                    onClick={() => {setSelecionado(0);   }} 
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${selecionado === 0 ? 'bg-blue-600 text-white' : 'hover:bg-blue-600'}`}
                >
                    Inicio
                </p>

                <p 
                    onClick={() => setSelecionado(1)} 
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${selecionado === 1 ? 'bg-blue-600 text-white' : 'hover:bg-blue-600'}`}
                >
                    Registro
                </p>

                <p 
                    onClick={() => setSelecionado(2)} 
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${selecionado === 2 ? 'bg-blue-600 text-white' : 'hover:bg-blue-600'}`}
                >
                    Gestión de servicios
                </p>

                <p 
                    onClick={() => setSelecionado(3)} 
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${selecionado === 3 ? 'bg-blue-600 text-white' : 'hover:bg-blue-600'}`}
                >
                    Gestión de empleados
                </p>

                <p 
                    onClick={() => setSelecionado(4)} 
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${selecionado === 4 ? 'bg-blue-600 text-white' : 'hover:bg-blue-600'}`}
                >
                    Mantenimiento de citas
                </p>

                <p 
                    onClick={() => setSelecionado(5)} 
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${selecionado === 5 ? 'bg-blue-600 text-white' : 'hover:bg-blue-600'}`}
                >
                    Consulta de horario
                </p>
            </div>
        </header>
    )
}
