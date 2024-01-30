import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/tasks');
        return result.data;
    } catch (err) {
        console.log(err)
    }
}
export const save = async (task) => {
    try {
        const result = await axios.post('http://localhost:8080/tasks',task);
        return result.data;
    } catch (err) {
        console.log(err)
    }
}