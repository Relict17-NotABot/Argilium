import { useState } from "react";
import { EventList } from "../components/EventList";
import { eventsData } from "../services/eventsData";

export function EventPage(){
    const [search, setSearch] = useState("")
    const filterEvents=eventsData.filter(
        (event)=> 
            event.title.
            toLowerCase().
            includes(search.toLowerCase())
    )
    return(
        <section>
            <h2>Eventos</h2>
            <input 
            type="text"
            value={search}
            placeholder="Buscar evento..."
            onChange={(e)=>setSearch(e.target.value) }
            />
            {filterEvents.length === 0 ?(
                <p>No hay resultados</p>
            ):(
                <EventList events={filterEvents} />
            )}       

        </section>
    )
}