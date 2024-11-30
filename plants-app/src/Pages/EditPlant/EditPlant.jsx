import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { editPlantAction } from "../../Actions/plantActions";
import {useNavigate, useParams} from "react-router-dom";

export const EditPlant = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const plant = useSelector((state) =>
        state.plantsR.plants.find((plant) => plant.id === parseInt(id))
    );
    console.log(plant)

    useEffect(() => {
        if (!plant) {
            navigate("/");
        }
    }, [plant, navigate]);

    const [name, setName] = useState(plant.name);
    const [latinName, setLatinName] = useState(plant.latinName);
    const [category, setCategory] = useState(plant.category);
    const [status, setStatus] = useState(plant.status);
    const [description, setDescription] = useState(plant.description);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedPlant = { ...plant, name, latinName, category, status, description };

        dispatch(editPlantAction(updatedPlant));
        navigate('/')
    };

    return (
        <div className="container mt-5">
            <h2>Edit Plant</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="latinName" className="form-label">Latin Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="latinName"
                        value={latinName}
                        onChange={(e) => setLatinName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select
                        className="form-select"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="tree">Tree</option>
                        <option value="shrub">Shrub</option>
                        <option value="flower">Flower</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select
                        className="form-select"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="common">Common</option>
                        <option value="rare">Rare</option>
                        <option value="endangered">Endangered</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
        </div>
    );
};
