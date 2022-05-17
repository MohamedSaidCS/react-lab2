import { useParams } from "react-router-dom"

function ShowStudent() {
    const {id} = useParams();
    return (
        <div className="container text-center mt-5">
            <h1>
                Student ID is {id}
            </h1>
        </div>
    );
}

export default ShowStudent;