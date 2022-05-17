import { Component } from "react";

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            age: '',
            addStudent: this.props.addStudent,
        };
    }

    passInput = () => {
        if (this.state.name && this.state.age) {
            this.state.addStudent(this.state.id, this.state.name, this.state.age);
            this.setState({
                id: '',
                name: '',
                age: '',
            });
        }
    }

    render() {
        return (
            <div>
                <div class="form-group">
                    <label for="id">ID</label>
                    <input type="text" class="form-control" id="id" placeholder="ID" value={this.state.id} onChange={(e) => this.setState({id: e.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="text" class="form-control" id="age" placeholder="Age" value={this.state.age} onChange={(e) => this.setState({age: e.target.value})}/>
                </div>  
                <button className="btn btn-primary mt-3" onClick={this.passInput}>Add</button>
            </div>
        );
    }
}

export default AddStudent;
