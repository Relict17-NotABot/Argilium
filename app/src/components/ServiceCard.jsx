import PropTypes from 'prop-types';

export function ServiceCard({ service }) {
    return (
        <article className="border border-[#cfb2c0] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-row justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-[#381f22]">{service.nombre}</h3>
                <span className="bg-[#cfb2c0] text-[#381f22] px-3 py-1 rounded-full text-sm font-semibold">
                    {service.especialidad.nombre}
                </span>
            </div>

            {service.imagen && (
                <img 
                    src={service.imagen} 
                    alt={service.nombre} 
                    className="w-full h-40 object-cover rounded-lg mb-3" 
                />
            )}

            <p className="text-[#381f22] mb-2">{service.descripcion}</p>

            <div className="grid grid-cols-2 gap-2 mb-3">
                <p className="text-[#9b111e] font-semibold">${service.precioBase}</p>
                <p className="text-[#b95887]">{service.duracionMinutos} min</p>
            </div>

            <div className="mb-3">
                {service.activo 
                    ? <span className="text-green-600 font-medium">Activo</span> 
                    : <span className="text-red-600 font-medium">Inactivo</span>}
            </div>

            <div className="flex flex-row gap-2">
                <button className="flex-1 bg-[#9b111e] text-white px-3 py-2 rounded-lg hover:bg-[#381f22] transition-colors text-sm font-medium">
                    Ver detalle
                </button>
                <button className="flex-1 bg-[#b95887] text-white px-3 py-2 rounded-lg hover:bg-[#381f22] transition-colors text-sm font-medium">
                    Editar
                </button>
                <button className="flex-1 bg-[#ce6f99] text-white px-3 py-2 rounded-lg hover:bg-[#381f22] transition-colors text-sm font-medium">
                    Activar
                </button>
            </div>
        </article>
    )
}

ServiceCard.propTypes = {
    service: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        especialidad: PropTypes.shape({
            nombre: PropTypes.string.isRequired
        }).isRequired,
        imagen: PropTypes.string,
        descripcion: PropTypes.string.isRequired,
        precioBase: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        duracionMinutos: PropTypes.number.isRequired,
        activo: PropTypes.bool.isRequired
    }).isRequired
}

