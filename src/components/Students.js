import { useNavigate } from "react-router-dom";

function Students({ students }) {
    const navigate = useNavigate();

    const listStudents = () => {
        if (students.length > 0) {
            return students.map((student, index) => {
                return (
                    <button className="list-group-item list-group-item-action" key={index} onClick={() => navigate(`/students/${student.id}`)}>
                        <h5>{student.id} - {student.name} - {student.age}</h5>
                    </button>
                );
            });
        } else {
            return <li>No students</li>;
        }
    }

    return (
        <div className="list-group mt-5">
            {listStudents()}
        </div>
    );
}

export default Students;