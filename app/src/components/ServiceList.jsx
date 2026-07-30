import propTypes from "prop-types"
import { ServiceCard } from "./ServiceCard"

export function ServiceList({services}){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {services.map((item)=>(
                <ServiceCard key={item.id} service={item}/>
            ))} 
        </div>
    )
}

ServiceList.propTypes={
    services:propTypes.array.isRequired
}