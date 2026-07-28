import { useEffect, useState } from "react";
import { ServiceList } from "../components/ServiceList";
import { getServices } from "../services/ServicesData";


export function ServicesPage(){

const [services, setServices] = useState([])
const [search, setSearch] = useState("")

    useEffect(()=>{ 

        async function fetchServices() {
            try {
                
                const data= await getServices()
                console.log(data)
                setServices(data.data)
            } catch (error) {
                console.error("Error al cargar eventos",error)
                
            } 
        }
        fetchServices()

},[])
    return(
        <section>
            
            <h2>Servicios</h2>
            <input type="search" placeholder="Ingresa aqui tu busqueda de servicios" onChange={(e)=>{
                setSearch(e.target.value)
            }}/>
                <input type="checkbox" id="PrecioMayorMenor"  onChange={(e) => {
        //Los tres puntos ... crean una copia nueva del array en otra dirección de memoria.
        const serviciosOrdenados = [...services]; 
        
        if (e.target.checked) {
            serviciosOrdenados.sort((a, b) => a.precioBase - b.precioBase);
            
        } else {
            
            serviciosOrdenados.sort((a, b) => b.precioBase - a.precioBase);
        }
        
        
        setServices(serviciosOrdenados);
    }}  />
                <label htmlFor="PrecioMayorMenor" className="ml-5">Ordenar por precio de menor a mayor</label>

                { search === "" ? <ServiceList services={services}/> : services.filter( service => service.nombre.includes(search) ).length === 0 ? <p>No hay servicios</p> : <ServiceList services={services.filter( service => service.nombre.includes(search) )}/>
                
                }
            
            

        </section>
    )
}

//services={services.filter( service => service.nombre.includes(search)