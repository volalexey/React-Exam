import axios from "axios";

const ALI_URL = 'http://localhost:7000/plants'

const api = axios.create({
    baseURL: ALI_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const getPlants = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const addPlant = async (plant) => {
    try{
        const response = await api.post( '/', plant);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const deletePlant = async (id) => {
    try {
        const response = await api.delete(`/${id}`);
        return response.status;
    }
    catch (error) {
        console.log(error);
    }
}
export const editPlant = async (updatedPlant) => {
    try {
        const response = await api.put(`/${updatedPlant.id}`, updatedPlant);
        return response.status;
    }
    catch (error) {
        console.log(error);
    }
}