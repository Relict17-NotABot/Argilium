import { DateList } from "@/components/DateList";
import { getDate } from "@/services/DateData";
import { useEffect, useState } from "react";

export function CitasPage(){

    const [dates, setDate] = useState([]);
    const [estado, setSelectedEstado] = useState("");
    const [sortDate, setSortDate] = useState("");
    const [search, setSearch] = useState("")

    useEffect(() => {
        async function fetchDates() {
            try {
                const data = await getDate();
                setDate(data.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        }
        fetchDates();
    }, []);

const estados = {
    1: "Pendiente",
    2: "Confirmada",
    4: "Finalizada",
    5: "Cancelada"
};

const filteredDates = dates
    .filter(date => {
        const matchesSearch = date.cliente.nombre
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesEstado =
            estado === "" || estados[date.estadoCitaId] === estado;

        return matchesSearch && matchesEstado;
    })
    .sort((a, b) =>
    sortDate
        ? new Date(a.fecha) - new Date(b.fecha) : new Date(b.fecha) - new Date(a.fecha)
);

    return(
        <section className="p-4 w-full">
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold text-[#381f22] mb-4">Citas</h2>
                    </div>
                    
        
                    <div className="flex flex-wrap gap-4 mb-4">
                        
        <select 
                    onChange={(e) => setSelectedEstado(e.target.value)}
                    className={`px-4 py-2 border border-[#cfb2c0] rounded-lg bg-white text-[#381f22]`  }
                >
                    <option value="">Todos</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Confirmada">Confirmada</option>
                    <option value="Finalizada">Finalizada</option>
                    <option value="Cancelada">Cancelada</option>
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
                        id="OrdenarFecha"
                        onChange={(e) => setSortDate(e.target.checked)}
                        className="w-5 h-5"
                    />
                    <label htmlFor="PrecioMayorMenor" className="text-[#381f22]">
                        Ordenar por fecha
                    </label>
                        </div>
                    </div>

{
    filteredDates.length === 0
        ? <p className="text-[#b95887] text-center py-8">No hay citas</p>
        : <DateList dates={filteredDates} />
}
                </section>
            
    )
}