import propTypes from "prop-types"
import { ServiceCard } from "./ServiceCard"


export function ServiceList({services}){
    return (
        <div className="CardServicio">
            {services.map((item)=>(
                <ServiceCard key={item.id} service={item}/>
            ))} 
        </div>
    )
}
ServiceList.propTypes={
    services:propTypes.array.isRequired
}