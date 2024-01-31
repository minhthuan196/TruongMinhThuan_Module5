import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteUser, getAllUser} from "../redux/action/user";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserList() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const handleDelete=(user)=>{
        console.log(user);
        dispatch(deleteUser(user));
        alert("Delete user successfully");
        dispatch(getAllUser());
    }
    const handleGetUser=()=>{
        dispatch(getAllUser())

    }
    // useEffect(() => {
    //     dispatch(getAllUser())
    // }, [dispatch]);
    return (
        <>
            <h1>User List</h1>
            <button type="button" className="btn btn-outline-danger"
                    onClick={()=>handleGetUser()}>
                Get User
            </button>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Website</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>
                                <button type="button" className="btn btn-outline-danger"
                                onClick={()=>handleDelete(user)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </>
    )
}

export default UserList;