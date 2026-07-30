import { useState } from "react"

export function NavBar() {
    const [selecionado, setSelecionado] = useState(0)

    return (
        <header className="flex flex-row items-center p-4 bg-[#f5f0e8] border-b border-[#cfb2c0]">
            <img src="src/assets/logoArgilium.png" alt="Logo" className="h-auto w-25"/>

            <div className="flex-1 flex flex-row justify-end gap-3">
                <p 
                    onClick={() => {setSelecionado(0);   }} 
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${selecionado === 0 ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                >
                    Inicio
                </p>

                <p 
                    onClick={() => setSelecionado(1)} 
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${selecionado === 1 ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                >
                    Registro
                </p>

                <p 
                    onClick={() => setSelecionado(2)} 
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${selecionado === 2 ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                >
                    Gestión de servicios
                </p>

                <p 
                    onClick={() => setSelecionado(3)} 
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${selecionado === 3 ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                >
                    Gestión de empleados
                </p>

                <p 
                    onClick={() => setSelecionado(4)} 
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${selecionado === 4 ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                >
                    Mantenimiento de citas
                </p>

                <p 
                    onClick={() => setSelecionado(5)} 
                    className={`px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${selecionado === 5 ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                >
                    Consulta de horario
                </p>
            </div>
        </header>
    )
}
