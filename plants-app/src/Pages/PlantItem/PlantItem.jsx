import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deletePlantAction} from "../../Actions/plantActions";

export const PlantItem = ({plantItem}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleEditClick() {
        navigate(`/edit/${plantItem.id}`);
    }

    const handleDelete = () => {
        dispatch(deletePlantAction(plantItem.id));
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{plantItem.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{plantItem.latinName}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{plantItem.category}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{plantItem.status}</h6>
                    <p className="card-text">{plantItem.description}</p>
                    <button
                        className="btn btn-warning"
                        onClick={handleEditClick}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
