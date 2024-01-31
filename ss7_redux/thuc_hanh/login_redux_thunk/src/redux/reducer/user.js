import {DELETE_USER, GET_ALL_USER} from "../action/type";
import {deleteUser} from "../action/user";

const initialState = [];
const userReducer = (users = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_USER:
            return payload;
        case DELETE_USER:
            return users.filter(user => user.id !== action.payload.user.id);
        default:
            return users;
    }
}
export default userReducer;