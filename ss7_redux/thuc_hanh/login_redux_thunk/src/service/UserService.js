import request from "../http-common";

const fillAll = () => {
    return request.get('/users');
}
const deleteUser=(user)=>{
return request.delete('/users/' + user.id)
}
const userService = {
    fillAll,
    deleteUser
}
export default userService;