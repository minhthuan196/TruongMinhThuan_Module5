import {Component} from "react";
import './Student.css';

class Student extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [
                {
                    id: 1,
                    name: 'Trương Minh Thuận',
                    age: 13,
                    address: 'Đà Nẵng'
                },
                {
                    id: 2,
                    name: 'Phạm Thanh Hữu',
                    age: 14,
                    address: 'Sài Gòn'
                },
                {
                    id: 3,
                    name: 'Linh Giang',
                    age: 15,
                    address: 'Đà Nẵng'
                }
            ]
        }
    }

    render() {
        return (
            <>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.studentList.map(student =>
                        (<tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>))}
                    </tbody>
                </table>
            </>
        )
    }
}

export default Student;