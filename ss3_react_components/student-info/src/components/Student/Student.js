import "./Student.css";

const student = [{
    id: 1,
    name: "John",
    age: 25,
    address: "Đà Nẵng"
},
    {
        id: 2,
        name: "Jane",
        age: 26,
        address: "Sài Gòn"
    },
    {
        id: 3,
        name: "Mary",
        age: 27,
        address: "Hà Nội"
    }];

function Student() {
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
                {student.map(student =>
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

export default Student;