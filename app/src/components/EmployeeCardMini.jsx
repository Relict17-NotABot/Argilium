import PropTypes from "prop-types";

export function EmployeeMiniCard({ employee }) {
    const { usuario, descripcion, activo } = employee;

    const fullName = `${usuario.nombre} ${usuario.primerApellido}${
        usuario.segundoApellido ? " " + usuario.segundoApellido : ""
    }`;

    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-3">
<div className="flex items-center justify-between gap-2">
    <h3 className="min-w-0 flex-1 truncate text-xl font-semibold text-[#381f22]">
        {fullName}
    </h3>

    <span
        className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${
            activo
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
        }`}
    >
        {activo ? "Activo" : "Inactivo"}
    </span>
</div>


            {descripcion && (
                <p className="text-sm text-gray-600 line-clamp-3">
                    {descripcion}
                </p>
            )}

            {usuario.correo && (
                <p className="text-sm text-gray-500">
                    {usuario.correo}
                </p>
            )}

            {usuario.telefono && (
                <p className="text-sm text-gray-500">
                    {usuario.telefono}
                </p>
            )}

        </div>
    );
}

EmployeeMiniCard.propTypes = {
    employee: PropTypes.shape({
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
    }).isRequired,
};