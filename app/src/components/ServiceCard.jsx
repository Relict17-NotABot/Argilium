

import PropTypes from 'prop-types';

export function ServiceCard({ service }) {
    return (
        <article className="border p-4 rounded-lg shadow-sm">
            <div className='flex flex-row gap-10'>
                <h3>{service.nombre}</h3>

                <p className='Especialidad'>{service.especialidad.nombre}</p>

            </div>
            {/* Es obligatorio mostrar la imagen según los requerimientos [2, 4] */}
            <img src={service.imagen} alt={service.nombre} className="w-full h-48 object-cover" />
            <p>Descripción: {service.descripcion}</p>
            <p>Precio Base: ${service.precioBase}</p>
            <p>Duración en minutos: {service.duracionMinutos} min</p>
            <div>
                Activo: {service.activo ? <span className='text-green-500'>Si</span> : <span className='text-red-500'>No</span>}
            </div>
            <div className='flex flex-row gap-10 h-20 items-center'>
                <button className='btnVerDetalle h-fit'>
                    Ver en detalle
                </button>

                <button className='btnEditar h-fit'>
                    Editar
                </button>

                <button className='btnActivar h-fit'>
                    Activar/Desactivar
                </button>
            </div>
        </article>
    );
}

ServiceCard.propTypes = {
    service: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        // Agregamos la validación del objeto especialidad y su propiedad nombre
        especialidad: PropTypes.shape({
            nombre: PropTypes.string.isRequired
        }).isRequired,
        imagen: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        precioBase: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        duracionMinutos: PropTypes.number.isRequired,
        activo: PropTypes.bool.isRequired
    }).isRequired
};

