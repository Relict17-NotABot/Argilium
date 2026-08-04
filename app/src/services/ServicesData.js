const API_URL=import.meta.env.VITE_API_URL
export async function getServices() {
    try {
        const response = await fetch(`${API_URL}/servicios`)
        if (!response.ok) {
            throw new Error();
            
        }
        return await response.json()
    } catch (error) {
        console.log("Error al obtener servicios: "+ error);
        throw new Error("Error al obtener servicios")
        
    }
}

export async function getServicesById(id) {
    try {
        const response = await fetch(`${API_URL}/servicios/${id}`);
        if (!response.ok) {
            throw new Error();
        }
        return await response.json();
    } catch {
        throw new Error("No se pudo cargar el detalle del servicio.");
    }
}