import { useState } from "react"
import { NavLink } from "react-router-dom"

export function NavBar() {
    
    const [abierto, setAbierto] = useState(false);

    return (
        <header className="flex flex-row items-center p-4 bg-[#f5f0e8] border-b border-[#cfb2c0] relative">
            <img src="src/assets/logoArgilium.png" alt="Logo" className="h-auto w-25"/>
            <div className="hidden md:flex flex-1 flex-row justify-end gap-3">
                <NavLink 
                    to="/" 
                    className={({isActive}) => `px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${isActive ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                >
                    Inicio
                </NavLink>
                <NavLink 
                    to="/services" 
                    className={({isActive}) => `px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${isActive ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                >
                    Gestión de servicios
                </NavLink>
                <NavLink 
                    to="/employees" 
                    className={({isActive}) => `px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${isActive ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                >
                    Gestión de empleados
                </NavLink>
                <NavLink 
                    to="/appointments" 
                    className={({isActive}) => `px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${isActive ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                >
                    Mantenimiento de citas
                </NavLink>
                <NavLink 
                    to="/schedules" 
                    className={({isActive}) => `px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${isActive ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                >
                    Consulta de horario
                </NavLink>
            </div>


            <button 
                className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 ml-auto" 
                onClick={() => setAbierto(!abierto)}
            >
                <span className={`w-7 h-1 transition-colors duration-300 ${abierto ? 'bg-[#b95887]' : 'bg-black'}`}></span>
                <span className={`w-7 h-1 transition-colors duration-300 ${abierto ? 'bg-[#b95887]' : 'bg-black'}`}></span>
                <span className={`w-7 h-1 transition-colors duration-300 ${abierto ? 'bg-[#b95887]' : 'bg-black'}`}></span>
            </button>


            {abierto && (
                <div className="md:hidden flex flex-col absolute top-[120px] left-0 right-0 w-full bg-[#f5f0e8] border-t  p-[14px] rounded-b-[12px] z-[999] gap-2 " >
                    <NavLink 
                        to="/" 
                        onClick={() => setAbierto(false)}
                        className={({isActive}) => `px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${isActive ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                    >
                        Inicio
                    </NavLink>
                    <NavLink 
                        to="/services" 
                        onClick={() => setAbierto(false)}
                        className={({isActive}) => `px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${isActive ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                    >
                        Gestión de servicios
                    </NavLink>
                    <NavLink 
                        to="/employees" 
                        onClick={() => setAbierto(false)}
                        className={({isActive}) => `px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${isActive ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white '}`}
                    >
                        Gestión de empleados
                    </NavLink>
                    <NavLink 
                        to="/appointments" 
                        onClick={() => setAbierto(false)}
                        className={({isActive}) => `px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${isActive ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                    >
                        Mantenimiento de citas
                    </NavLink>
                    <NavLink 
                        to="/schedules" 
                        onClick={() => setAbierto(false)}
                        className={({isActive}) => `px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${isActive ? 'bg-[#9b111e] text-white' : 'text-[#381f22] hover:bg-[#9b111e] hover:text-white'}`}
                    >
                        Consulta de horario
                    </NavLink>
                </div>
            )}
        </header>
    )
}
