import userService from "../../service/UserService";
import {DELETE_USER, GET_ALL_USER} from "./type";

export const getAllUser = () => async (dispatch) => {
    try {
        const result = await userService.fillAll();
        dispatch({
            type: GET_ALL_USER,
            payload: result.data
        })
    } catch (err) {
        console.log(err)
    }
}
export const deleteUser = (user) => async (dispatch) => {
    try {
        const result = await userService.deleteUser(user);
        dispatch({
            type: DELETE_USER,
            payload: result.data
        })
    } catch (err) {
        console.log(err)
    }
}