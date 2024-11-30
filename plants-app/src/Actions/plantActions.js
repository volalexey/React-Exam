import {addPlant, deletePlant, editPlant, getPlants} from "../api";

export const fetchPlants = () => async (dispatch) => {
    try {
        const plants = await getPlants();
        dispatch({ type: 'SET_PLANTS', payload: plants });
    } catch (error) {
        console.error(error);
    }
};

export const addPlantAction = (plant) => async (dispatch) => {
    try {
        const newPlant = await addPlant(plant);
        dispatch({ type: 'ADD_PLANT', payload: newPlant });
    } catch (error) {
        console.error(error.message);
    }
};

export const deletePlantAction = (id) => async (dispatch) => {
    try {
        await deletePlant(id);
        dispatch({ type: 'DELETE_PLANT', payload: id });
    } catch (error) {
        console.error(error);
    }
};

export const editPlantAction = (updatedPlant) => async (dispatch) => {
    try {
        const editedPlant = await editPlant(updatedPlant);
        dispatch({ type: 'EDIT_PLANT', payload: editedPlant });
    } catch (error) {
        console.error("Error editing plant:", error.message);
    }
};

export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        payload: filter
    };
};