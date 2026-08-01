import PropTypes from 'prop-types'

export function EmployeeCard({ employee }) {
    const { usuario, especialidad, servicios, codigoEmpleado, descripcion, activo } = employee
    const fullName = `${usuario.nombre} ${usuario.primerApellido}${usuario.segundoApellido ? ' ' + usuario.segundoApellido : ''}`

    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#381f22]">{fullName}</h2>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${activo ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {activo ? 'Activo' : 'Inactivo'}
                </span>
            </div>

            <p className="text-sm text-[#b95887] font-medium">{especialidad.nombre}</p>
            <p className="text-xs text-gray-500">Código: {codigoEmpleado}</p>

            {descripcion && (
                <p className="text-sm text-gray-600 line-clamp-2">{descripcion}</p>
            )}

            {usuario.correo && (
                <p className="text-sm text-gray-500">{usuario.correo}</p>
            )}

            {servicios && servicios.length > 0 && (
                <div className="mt-1">
                    <p className="text-xs font-semibold text-[#381f22] mb-1">Servicios:</p>
                    <div className="flex flex-wrap gap-1">
                        {servicios.map(servicio => (
                            <span key={servicio.id} className="text-xs bg-[#f5f0e8] text-[#381f22] px-2 py-1 rounded-full">
                                {servicio.nombre}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

EmployeeCard.propTypes = {
    employee: PropTypes.shape({
        id: PropTypes.number.isRequired,
        codigoEmpleado: PropTypes.string.isRequired,
        descripcion: PropTypes.string,
        activo: PropTypes.bool.isRequired,
        usuario: PropTypes.shape({
            nombre: PropTypes.string.isRequired,
            primerApellido: PropTypes.string.isRequired,
            segundoApellido: PropTypes.string,
            correo: PropTypes.string,
            telefono: PropTypes.string,
        }).isRequired,
        especialidad: PropTypes.shape({
            nombre: PropTypes.string.isRequired,
        }).isRequired,
        servicios: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
        })),
    }).isRequired
}
