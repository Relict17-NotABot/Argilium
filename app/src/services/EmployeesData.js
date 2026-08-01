const API_URL=import.meta.env.VITE_API_URL
export async function getEmployees() {
    try {
        const response = await fetch(`${API_URL}/empleados`)
        if (!response.ok) {
            throw new Error();
        }
        const json = await response.json()
        return json.data
    } catch (error) {
        console.log("Error al obtener empleados: "+ error);
        throw new Error("Error al obtener empleados")
    }
}