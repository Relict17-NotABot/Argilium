import { useEffect, useState } from "react";
import { ServiceList } from "../components/ServiceList";
import { getServices } from "../services/ServicesData";

export function ServicesPage() {
    const [services, setServices] = useState([])
    const [search, setSearch] = useState("")
    const [selectedEspecialidad, setSelectedEspecialidad] = useState("")
    const [sortPrice, setSortPrice] = useState(false)

    useEffect(() => {
        async function fetchServices() {
            try {
                const data = await getServices()
                setServices(data.data)
            } catch (error) {
                console.error("Error al cargar servicios", error)
            }
        }
        fetchServices()
    }, [])

    const filteredServices = services.filter(service => {
            const matchesSearch = service.nombre.toLowerCase().includes(search.toLowerCase())
            const matchesEspecialidad = selectedEspecialidad === "" ||
                                         service.especialidad.nombre === selectedEspecialidad
            return matchesSearch && matchesEspecialidad
        })
        .sort((a, b) => sortPrice ? a.precioBase - b.precioBase : b.precioBase - a.precioBase)

    return (
        <section className="p-4">
            <h2 className="text-2xl font-bold text-[#381f22] mb-4">Servicios</h2>

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
                    className="flex-1 min-w-[200px] px-4 py-2 border border-[#cfb2c0] rounded-lg"
                />

                <div className="flex items-center gap-2">
                    <input 
                        type="checkbox" 
                        id="PrecioMayorMenor"
                        onChange={(e) => setSortPrice(e.target.checked)}
                        className="w-5 h-5"
                    />
                    <label htmlFor="PrecioMayorMenor" className="text-[#381f22]">
                        Ordenar por precio
                    </label>
                </div>
            </div>

            {filteredServices.length === 0
                ? <p className="text-[#b95887] text-center py-8">No hay servicios</p>
                : <ServiceList services={filteredServices}/>
            }
        </section>
    )
}