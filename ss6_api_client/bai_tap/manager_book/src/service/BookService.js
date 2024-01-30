import axios from "axios";


export const fillAll = async () => {
    try{
        const result = await axios.get('http://localhost:8080/library');
        return result.data;
    }catch (err){
        console.log(err)
    }
}
export const save = async (book) => {
    try{
        const result = await axios.post('http://localhost:8080/library',book);
        return result.data;
    }catch (err){
        console.log(err)
    }
}
export const update = async (book) => {
    try{
        const result = await axios.put(`http://localhost:8080/library/${book.id}`,book);
        return result.data;
    }catch (err){
        console.log(err)
    }
}
export const deleteBook = async (book) => {
    try{
        const result = await axios.delete(`http://localhost:8080/library/${book.id}`);
        return result.data;
    }catch (err){
        console.log(err)
    }
}
export const getBook = async ({id}) => {
    try{
        const result = await axios.get(`http://localhost:8080/library/${id}`);
        return result.data;
    }catch (err){
        console.log(err)
    }
}