import propTypes from "prop-types"
import { ServiceCard } from "./ServiceCard"
import { AdditionalServiceCard } from "./AdditionalServiceCard"

export function ServiceList({services, normalAdicional}){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

{normalAdicional ? (
    services.map((item) => (
        <ServiceCard key={item.id} service={item} />
    ))
) : (
    services.map((item) => (
        <AdditionalServiceCard key={item.id} service={item} />
    ))
)}

            
        </div>
    )
}

ServiceList.propTypes={
    services:propTypes.array.isRequired,
    normalAdicional:propTypes.bool.isRequired
}