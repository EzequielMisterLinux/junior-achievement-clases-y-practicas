import axios from "axios";


let urlBase = "http://localhost:3000/api"; 

const getUsers = async () => {
    try {
        const response = await axios.get(`${urlBase}/get-users`, {
            withCredentials: true, 
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error.response || error.message);
        return { error: "Failed to fetch users" }; 
    }
};

export default getUsers
