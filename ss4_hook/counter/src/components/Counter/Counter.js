import {useState} from "react";

function Counter() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const increateOne = (count) => setCountOne(previousCount => previousCount + 1)
    const increateTwo = (count) => setCountTwo(previousCount => previousCount + 2)
    return (
        <>
            <p>Count: {countOne}</p>
            <button onClick={increateOne}>Add 1</button>
            <br/>
            <p>Count: {countTwo}</p>
            <button onClick={increateTwo}>Add 2</button>
        </>
    )
}

export default Counter;