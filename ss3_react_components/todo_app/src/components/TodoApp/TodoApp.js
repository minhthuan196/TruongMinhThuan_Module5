import {useState} from "react";


function TodoApp() {
    const [newData, setNewData] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (event) => {
        setNewData(event.target.value);
    }

    const handleAddItem = () => {
        if (newData.trim() !== '') {
            setTodoList([...todoList, newData]);
            setNewData('');
        }
    }

    return (
        <>
            <h1>Todo List</h1>
            <input value={newData} onChange={handleChange}/>
            <button onClick={handleAddItem}>ADD</button>
            {todoList.map((todoList, index) => (
                <p key={index}>{todoList}</p>
            ))}
        </>
    )
}

export default TodoApp;