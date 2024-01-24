function Fruits() {
    const fruits = ["Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"];
    return (
        <>
            <h1>List of fruits</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </>
    )
}

export default Fruits;