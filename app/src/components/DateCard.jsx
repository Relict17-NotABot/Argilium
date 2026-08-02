import PropTypes from "prop-types";

export function DateCard({ date }) {
    // Configuración de indicadores visuales según el estado [1]
    const statusConfig = {
        1: { label: "Pendiente", color: "bg-yellow-500 hover:bg-yellow-600" },
        2: { label: "Confirmada", color: "bg-blue-500 hover:bg-blue-600" },
        4: { label: "Finalizada", color: "bg-green-500 hover:bg-green-600" },
        5: { label: "Cancelada", color: "bg-red-500 hover:bg-red-600" },
    };

    const currentStatus = statusConfig[date.estadoCitaId] || { label: "Desconocido", color: "bg-gray-500" };

// Formatea la fecha
    const formattedDate = new Date(date.fecha).toLocaleDateString('es-ES', {
        day: '2-digit', month: 'long', year: 'numeric'
    });



return (
    <article className="border border-[#cfb2c0] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col">

        <div className="flex-1">

            {/* Encabezado */}
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-[#381f22]">
                    Cita #{date.id}
                </h3>

                <span className={`${currentStatus.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {currentStatus.label}
                </span>
            </div>

            {/* Cliente */}
            <div className="mb-3">
                <p className="text-sm text-gray-500">
                    Cliente
                </p>

                <p className="font-semibold text-[#381f22]">
                    {date.cliente.nombre} {date.cliente.primerApellido}
                </p>
            </div>

            {/* Fecha */}
            <div className="mb-3">
                <p className="text-sm text-gray-500">
                    Fecha
                </p>

                <p className="text-[#381f22]">
                    {formattedDate}
                </p>
            </div>

            {/* Horario */}
            <div className="grid grid-cols-2 gap-2 mb-3">

                <div>
                    <p className="text-sm text-gray-500">
                        Hora
                    </p>

                    <p className="text-[#381f22]">
                        {date.horaInicio.split("T")[1].substring(0, 5)}
                        {" - "}
                        {date.horaFin.split("T")[1].substring(0, 5)}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Duración
                    </p>

                    <p className="text-[#381f22]">
                        {date.duracionMinutos} min
                    </p>
                </div>

            </div>

            {/* Costo */}
            <div className="mb-3">
                <p className="text-sm text-gray-500">
                    Costo Total
                </p>

                <p className="text-[#9b111e] font-bold text-lg">
                    ${date.costoTotal}
                </p>
            </div>

        </div>

        {/* Botones */}
        <div className="flex gap-2 mt-2">

            <button className="bg-[#9b111e] text-white px-3 py-2 rounded-lg hover:bg-[#381f22] transition-colors text-sm font-medium">
                Ver detalle
            </button>

            <button className="bg-[#b95887] text-white px-3 py-2 rounded-lg hover:bg-[#381f22] transition-colors text-sm font-medium">
                Editar
            </button>

        </div>

    </article>
);
}

DateCard.propTypes = {
    date: PropTypes.shape({
        id: PropTypes.number.isRequired,
        estadoCitaId: PropTypes.number.isRequired,
        fecha: PropTypes.string.isRequired,
        horaInicio: PropTypes.string.isRequired,
        horaFin: PropTypes.string.isRequired,
        duracionMinutos: PropTypes.number.isRequired,
        costoTotal: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,

        cliente: PropTypes.shape({
            nombre: PropTypes.string.isRequired,
            primerApellido: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};
