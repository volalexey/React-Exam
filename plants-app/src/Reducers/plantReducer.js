const initialState = {
    plants:[
        //
    ],
    filters: [
        {name: 'category', value: null},
    ]
}

const plantReducer = (state=initialState, action) =>{
    switch(action.type) {
        case 'SET_PLANTS':
            return { ...state, plants: action.payload };
        case 'ADD_PLANT':
            return { ...state, plants: [...state.plants, action.payload] };
        case 'DELETE_PLANT':
            return { ...state, plants: state.plants.filter(plant => plant.id !== action.payload) };
        case 'EDIT_PLANT':
            return {...state, plants: state.plants.map((plant) =>
                    plant.id === action.payload.id ? action.payload : plant),};
        case 'SET_FILTER':
            return {...state, filters: state.filters.map(filter =>
                    filter.name === action.payload.name ? { ...filter, value: action.payload.value } : filter
                ),
            };
        default:
            return state;
    }
}

export default plantReducer;