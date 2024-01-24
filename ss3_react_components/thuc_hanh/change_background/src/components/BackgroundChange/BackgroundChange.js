import {useState} from "react";

function BackgroundChange() {
    const [color, setColor] = useState("black");
    setTimeout(() => {
        setColor("red");
    }, 5000);
    return (
        <>
            <div style={{
                background: color,
                padding: 20,
                width: 400,
                height: 80,
                margin: 'auto'
            }}>
            </div>
        </>
    )
}

export default BackgroundChange;