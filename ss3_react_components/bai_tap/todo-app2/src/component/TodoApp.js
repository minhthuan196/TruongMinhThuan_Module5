import {Component} from "react";

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todoName: '',
            todoList: []
        }
    }

    handleChange(value) {
        this.setState({
            todoName: value
        });
    }

    handleAdd() {
        this.setState((prev) => (
                {
                    todoList: [prev.todoName, ...prev.todoList],
                    todoName: ''
                }
            )
        )
        console.log(this.state.todoList)

    }

    render() {
        return (
            <>
                <h1>Todo List</h1>
                <input value={this.state.todoName}
                       onChange={(event) => this.handleChange(event.target.value)}/>
                <button onClick={() => this.handleAdd}>ADD</button>
                {this.state.todoList.map((todo, index) => (
                    <p key={index}>{todo}</p>
                ))}
            </>
        )
    }
}

export default TodoApp;