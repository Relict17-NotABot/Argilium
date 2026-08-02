const API_URL=import.meta.env.VITE_API_URL
export async function getDate() {
    try {
        const response = await fetch(`${API_URL}/citas`)
        if (!response.ok) {
            throw new Error();
            
        }
        return await response.json()
    } catch (error) {
        console.log("Error al obtener citas: "+ error);
        throw new Error("Error al obtener citas")
        
    }
}