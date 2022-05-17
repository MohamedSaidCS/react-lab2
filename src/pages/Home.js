import { Component } from "react";
import AddStudent from "../components/AddStudent";
import Students from "../components/Students";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            students: [
                { id: "1", name: "John", age: "20" },
            ],
        };
    }

    addStudent = (id, name, age) => {
        this.setState({
            students: [...this.state.students, { id, name, age }],
        });
    }

    render() {
        return (
            <div className="container">
                <AddStudent addStudent={this.addStudent}/>
                <Students students={this.state.students}/>
            </div>
        );
    }
}

export default Home;