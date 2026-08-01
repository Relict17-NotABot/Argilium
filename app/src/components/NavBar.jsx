import { NavLink } from "react-router-dom"

export function NavBar() {
    return (
        <header className="flex flex-row items-center p-4 bg-[#f5f0e8] border-b border-[#cfb2c0]">
            <img src="src/assets/logoArgilium.png" alt="Logo" className="h-auto w-25"/>

            <div className="flex-1 flex flex-row justify-end gap-3">
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
        </header>
    )
}
