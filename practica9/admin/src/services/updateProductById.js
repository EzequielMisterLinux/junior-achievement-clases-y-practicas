import axios from "axios";


let urlBase = "http://localhost:3000/api/actualizar-productos"


const updateProductById = async (id, newInfoProduct) => {
    
    try {
        
        const respuestaDeLaActualizacion = await axios.put(`${urlBase}/${id}`, newInfoProduct)
        

        return await respuestaDeLaActualizacion.data

    } catch (error) {
        console.error("hubo un problema al actualizar el producto, ", error);
        
    }

}

export default updateProductById