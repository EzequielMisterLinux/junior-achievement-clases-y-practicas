let urlBase = "http://localhost:3000/api/crear-usuario";

const AgregarUsuarios = async (formData) => {
    try {
        const response = await fetch(urlBase, {
            method: 'POST',
            body: formData,
            credentials: 'include',
        });
        
        return response;
    } catch (error) {
        console.error('Error en la petición:', error);
        throw error;
    }
};

export default AgregarUsuarios;