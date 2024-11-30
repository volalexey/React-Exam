import {useDispatch} from "react-redux";
import {useState} from "react";
import {addPlantAction} from "../../Actions/plantActions";

export const AddPlant = () =>{
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [category, setCategory] = useState('tree');
    const [status, setStatus] = useState('common');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPlant = {name, latinName, category, status, description};

        dispatch(addPlantAction(newPlant));

        setName('');
        setLatinName('');
        setCategory('tree');
        setStatus('common');
        setDescription('');
    }

    return (
        <div className="container mt-5">
            <h2>Add a New Plant</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Plant Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="latinName" className="form-label">Latin Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="latinName"
                        placeholder="Plant Latin Name"
                        value={latinName}
                        onChange={(e) => setLatinName(e.target.value)}
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
                        placeholder="Description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Add Plant</button>
            </form>
        </div>
    )
}