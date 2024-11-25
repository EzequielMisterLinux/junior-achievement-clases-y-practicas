import axios from "axios";

// Configuración de la API
const API_CONFIG = {
    BASE_URL: "http://localhost:3000/api",  // Removed /api since it's not in your backend route
    ENDPOINTS: {
        PRODUCTS: "/obtener-productos"  // Matches the exact route from your backend
    },
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 7
};

/**
 * Obtiene productos con soporte de paginación
 * @param {number} page - Número de página actual (default: 1)
 * @param {number} limit - Número de items por página (default: 7)
 * @returns {Promise<{productos: Array, totalPages: number, currentPage: number}>}
 */
const fetchProductos = async (
    page = API_CONFIG.DEFAULT_PAGE,
    limit = API_CONFIG.DEFAULT_LIMIT
) => {
    try {
        // Validate and sanitize input
        const validatedPage = Math.max(1, parseInt(page));
        const validatedLimit = Math.max(1, parseInt(limit));

        // Get token from sessionStorage
        const token = sessionStorage.getItem("token");
        if (!token) {
            throw new Error('No se encontró token de autenticación');
        }

        // Build URL with query parameters
        const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}`;
        
        // Make the request with proper authentication
        const response = await axios.get(url, {
            params: {
                page: validatedPage,
                limit: validatedLimit
            },
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`  // Add token to headers
            }
        });

        // Validate response data
        if (!response.data) {
            throw new Error('No se recibieron datos del servidor');
        }

        // Extract and return relevant data
        const { productos, totalPages, currentPage } = response.data;
        
        return {
            productos: productos || [],
            totalPages: totalPages || 1,
            currentPage: currentPage || validatedPage
        };

    } catch (error) {
        // Enhanced error handling
        const errorDetails = {
            message: error.response?.data?.msj || error.message,
            status: error.response?.status,
            timestamp: new Date().toISOString()
        };

        console.error("Error al obtener productos:", errorDetails);

        // If unauthorized, clear session
        if (error.response?.status === 401) {
            sessionStorage.clear();
            window.location.href = '/login';
            throw new Error('Sesión expirada o inválida');
        }

        throw new Error(`Error al obtener productos: ${errorDetails.message}`);
    }
};

// Export configuration and fetch function
export const ProductApiConfig = {
    ...API_CONFIG
};

export default fetchProductos;