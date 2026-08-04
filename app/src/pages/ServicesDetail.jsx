import { EmployeeList } from "@/components/EmployeeList";
import { PageHeader } from "@/components/PageHeader";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { getServicesById } from "@/services/ServicesData";
import { ArrowLeft, ListChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function ServicesDetail() {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const URL = import.meta.env.VITE_IMAGE_URL
    const [open, setOpen] = useState(false);
    useEffect(() => {
        async function fetchService() {
            try {
                setLoading(true);
                setError("");
                const data = await getServicesById(id)
                if (!data) {
                    setService(null);
                    return;
                }
                setService(data.data)
            } catch (error) {
                console.error("Error al cargar el servicio", error)
            } finally {
                setLoading(false);
            }
        }
        fetchService()

    }, [id])

    if (loading) {
        return <p className="text-muted-foreground">Cargando detalle...</p>;
    }
    if (error) {
        return <Alert>{error}</Alert>;
    }
    if (!service) {
        return (
            <section className="space-y-4">
                <PageHeader
                    title="Evento no encontrado"
                    description="No existe un evento asociado al identificador solicitado."
                />
                <Button asChild variant="outline">
                    <Link to="/services">Volver al listado de servicios</Link>
                </Button>
            </section>
        );
    }


    return (
        <section>

            <Button asChild variant="outline">
                <Link to="/services">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al listado de servicios
                </Link>
            </Button>
            <PageHeader
                description="Información detallada del servicio seleccionado"
            />

            <Card className=" rounded-2xl shadow-lg duration-300 border">
                <CardContent className=" flex flex-col gap-4 md:flex-row ">
                    <div className="flex-1 flex flex-col">
                        <Card className="mx-auto my-auto w-full max-w-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border">
                            <CardContent className="p-0">
                                <img
                                    src={`${URL}/${service.imagen}`}
                                    alt={service.nombre}
                                    className="p-1 w-full h-80 object-cover rounded-2xl"
                                />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex-2 border-t-2 md:border-l-2  md:border-t-0 px-8 py-6 flex flex-col gap-6">

                        <div>
                            <h2 className="text-3xl font-bold text-[#381f22]">
                                {service.nombre}
                            </h2>

                            <span className="inline-block mt-3 bg-[#f579b1] text-white px-4 py-1 rounded-full font-semibold">
                                {service.especialidad.nombre}
                            </span>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-[#381f22] mb-2">
                                Descripción
                            </h3>

                            <p className="text-muted-foreground leading-relaxed">
                                {service.descripcion}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">

                            <div className=" rounded-xl p-4">
                                <p className="text-sm text-muted-foreground">
                                    Precio
                                </p>

                                <p className="text-2xl font-bold text-[#9b111e]">
                                    ₡ {service.precioBase}
                                </p>
                            </div>

                            <div className=" rounded-xl p-4">
                                <p className="text-sm text-muted-foreground">
                                    Duración
                                </p>

                                <p className="text-2xl font-bold text-[#381f22]">
                                    {service.duracionMinutos} min
                                </p>
                            </div>

                        </div>

                        <div className="flex gap-4">

                            <h3 className="font-semibold mb-2">
                                Estado
                            </h3>

                            {service.activo ? (
                                <span className="bg-green-100 text-green-700 px-4 my-auto py-1 rounded-full font-medium ">
                                    Activo
                                </span>
                            ) : (
                                <span className="bg-red-100 text-red-700 px-4 my-auto py-1 rounded-full font-medium">
                                    Inactivo
                                </span>
                            )}

                        </div>
                        <div className="flex gap-4">
                            <label htmlFor="VerEmpleados">
                                <h3 className="font-semibold mb-2 my-auto">
                                    Ver empleados relacionados
                                </h3>
                            </label>
                            <ListChevronsUpDown onClick={() => setOpen(!open)} id="VerEmpleados" className={`my-auto h-8 w-8 p-1 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-[#9b111e] hover:text-white ${open ? "rotate-180" : ""}`} />

                        </div>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}

                        >
                            <EmployeeList
                                employees={service.empleados}
                                mini
                            />
                        </div>

                    </div>
                </CardContent>
                <CardFooter className="flex gap-2 justify-center">
                    <Button>
                        Editar servicio
                    </Button>
                    <Button>
                        Eliminar servicio
                    </Button>
                </CardFooter>
            </Card>


        </section>
    )
}