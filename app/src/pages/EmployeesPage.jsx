import { useEffect, useState } from "react";
import { EmployeeList } from "../components/EmployeeList";
import { getEmployees } from "../services/EmployeesData";

export function EmployeesPage(){
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedEspecialidad, setSelectedEspecialidad] = useState("");
  
    useEffect(() => {
        async function fetchEmployees() {
            try {
                const data = await getEmployees();
                setEmployees(data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        }
        fetchEmployees();
    }, []);

    const filteredEmployees = employees.filter(employee => {
        const fullName = `${employee.usuario.nombre} ${employee.usuario.primerApellido}`.toLowerCase();
        const matchesSearch = fullName.includes(search.toLowerCase());
        const matchesEspecialidad = selectedEspecialidad === "" ||
                                     employee.especialidad.nombre === selectedEspecialidad;
        return matchesSearch && matchesEspecialidad;
    });

    return(
        <section className="p-4">
            <h2 className="text-2xl font-bold text-[#381f22] mb-4">Empleados</h2>
            <div className="flex flex-wrap gap-4 mb-4">
                <select 
                    onChange={(e) => setSelectedEspecialidad(e.target.value)}
                    className="px-4 py-2 border border-[#cfb2c0] rounded-lg bg-white text-[#381f22]"
                >
                    <option value="">Todas las especialidades</option>
                    <option value="Tarot y Videncia">Tarot y Videncia</option>
                    <option value="Astrología Caldea">Astrología Caldea</option>
                    <option value="Magia de Endulzamientos">Magia de Endulzamientos</option>
                    <option value="Meditación Astral">Meditación Astral</option>
                    <option value="Estudios de Arcanos Mayores">Estudios de Arcanos Mayores</option>
                </select>

                <input 
                    type="search" 
                    placeholder="Ingresa aquí tu búsqueda de servicios"
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 min-w-50 px-4 py-2 border border-[#cfb2c0] rounded-lg"
                />
            </div>

            {filteredEmployees.length === 0 
                ? <p className="text-[#b95887] text-center py-8">No hay empleados</p>
                : <EmployeeList employees={filteredEmployees} />    
            }
            
        </section>  
    )
}