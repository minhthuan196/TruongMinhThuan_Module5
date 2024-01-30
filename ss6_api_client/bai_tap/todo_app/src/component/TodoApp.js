import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import * as taskService from "../service/TodoAppService"
import axios from "axios";

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        // Cách 1:Promise
        // axios.get('http://localhost:8080/tasks')
        //     .then((res)=>{
        //         console.log(res.data)
        //         setTasks(res.data)
        //     })
        //     .catch((err)=>{
        //         console.log(err.message)
        //     })
        // Cách 2: Asyns/Await
        // const fecthApi = async () => {
        //     try {
        //         const result = await axios.get('http://localhost:8080/tasks');
        //         console.log(result.data);
        //         setTasks(result.data);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }
        // fecthApi();
        // Cách 3: dùng service
        const fecthApi = async () => {
            try {
                const result = await taskService.findAll();
                setTasks(result);
            } catch (err) {
                console.log(err);
            }
        }
        fecthApi();
    }, []);
    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    description: 'Chưa hoàn thành'
                }}
                onSubmit={(values,{resetForm}) => {
                    console.log(values);
                    const create = async (task) => {
                        await taskService.save(task)
                        setTasks(await taskService.findAll())
                        alert("Added task successfully")
                        resetForm();
                    }
                    create(values);
                }}>
                <Form>
                    <h1>Todo List</h1>
                    <Field type='text' placeholder='Enter task'
                           name='title'/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                </tr>
                </thead>
                <tbody>
                {
                    tasks.map((task, index) => (
                        <tr key={task.id}>
                            <td>{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                        </tr>)
                    )
                }
                </tbody>
            </table>
        </>
    )
}

export default TodoApp;