import PropTypes from 'prop-types';

export function AdditionalServiceCard({ service }) {
    return (
        <article className="border border-[#cfb2c0] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className='flex-7'>
            <div className="flex flex-row justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-[#381f22]">{service.nombre}</h3>
            </div>

            <p className="text-[#381f22] mb-2">{service.descripcion}</p>

            <div className="grid grid-cols-2 gap-2 mb-3">
                <p className="text-[#9b111e] font-semibold">${service.precio}</p>
            </div>

            <div className="mb-3">
                {service.activo 
                    ? <span className="text-green-600 font-medium">Activo</span> 
                    : <span className="text-red-600 font-medium">Inactivo</span>}
            </div>
            </div>
            <div className="flex flex-row gap-2 flex-1 items-center">
                <button className=" bg-[#9b111e] text-white px-3 py-2 rounded-lg hover:bg-[#381f22] transition-colors text-sm font-medium w-fit h-fit ">
                    Ver detalle
                </button>
                <button className=" bg-[#b95887] text-white px-3 py-2 rounded-lg hover:bg-[#381f22] transition-colors text-sm font-medium w-fit h-fit">
                    Editar
                </button>
                <button className=" bg-[#ce6f99] text-white px-3 py-2 rounded-lg hover:bg-[#381f22] transition-colors text-sm font-medium w-fit h-fit">
                    Activar
                </button>
            </div>
        </article>
    )
}

AdditionalServiceCard.propTypes = {
    service: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        precio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        activo: PropTypes.bool.isRequired
    }).isRequired
}