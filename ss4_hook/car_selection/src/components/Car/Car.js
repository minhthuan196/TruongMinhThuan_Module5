import {useState} from "react";

function Car() {
    const carList = ["BMW", "Mec", "Audi", "Honda"];
    const colorList = ["Red", "blue", "black", "while"];
    const [selectCar, setSelectCar] = useState({car: "", color: ""})
    const car = (event) => {
        setSelectCar({...selectCar,car: event.target.value});
    }
    const color = (event) => {
        setSelectCar({...selectCar,color: event.target.value});
    }
    return (
        <>
            <h1>Select your car</h1>
            Select your car
            <select value={selectCar.car} onChange={car}>
                {carList.map((car, index) =>
                    (<option key={index} value={car}>{car}</option>))}
            </select>
            Select your color
            <select value={selectCar.color} onChange={color}>
                {colorList.map((color, index) =>
                    (<option key={index} value={color}>{color}</option>))}
            </select>
            {selectCar.car!==""&&selectCar.car!==""
                &&(<p> your select {selectCar.car} - {selectCar.color}</p>)}
        </>
    )
}

export default Car;