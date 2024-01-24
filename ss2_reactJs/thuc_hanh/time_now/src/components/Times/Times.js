function Times() {
    const times = new Date().toLocaleTimeString();
    return (
        <>
            <h1>Time now</h1>
            <p>Its is {times}</p>
        </>
    )
}

export default Times;