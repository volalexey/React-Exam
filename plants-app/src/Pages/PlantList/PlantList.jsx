import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPlants, setFilter} from "../../Actions/plantActions";
import {PlantItem} from "../PlantItem/PlantItem";

export const PlantList = () => {
    const dispatch = useDispatch();
    const {plants, filters} = useSelector((state) => state.plantsR);

    const [nameFilter, setNameFilter] = useState('');
    // const filters = useSelector((state) => state.filters);

    useEffect(() => {

        dispatch(fetchPlants());
    }, [dispatch]);

    const applyFilters = (plants) => {
        let filteredPlants = [...plants];

        filters.forEach((filter) => {
            if (filter.value && filter.name === 'category') {
                filteredPlants = filteredPlants.filter(
                    (plant) => plant.category === filter.value
                );
            }
        });

        if (nameFilter) {
            filteredPlants = filteredPlants.filter((plant) =>
                plant.name.toLowerCase().includes(nameFilter.toLowerCase())
            );
        }

        return  filteredPlants;
    }
    const filteredPlants = applyFilters(plants);

    return (
        <div className='container mt-4'>
            <div>
                <button
                    className={`btn mx-1 ${filters.find(filter => filter.name === 'category' && filter.value === 'tree') ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => dispatch(setFilter({name: 'category', value: 'tree'}))}
                >
                    Tree
                </button>
                <button
                    className={`btn mx-1 ${filters.find(filter => filter.name === 'category' && filter.value === 'shrub') ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => dispatch(setFilter({name: 'category', value: 'shrub'}))}
                >
                    Shrub
                </button>
                <button
                    className={`btn mx-1 ${filters.find(filter => filter.name === 'category' && filter.value === 'flower') ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => dispatch(setFilter({name: 'category', value: 'flower'}))}
                >
                    Flower
                </button>
                <button
                    className={`btn mx-1 ${filters.find(filter => filter.name === 'category' && !filter.value) ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => dispatch(setFilter({name: 'category', value: ''}))}
                >
                    All
                </button>

                <div className="mt-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        value={nameFilter}
                        onChange={(e) => setNameFilter(e.target.value)}
                    />
                </div>
            </div>
            {filteredPlants.map((plant) => (
                <div key={plant.id} className="mb-4">
                    <PlantItem plantItem={plant}/>
                </div>
            ))}
        </div>
    )
}

