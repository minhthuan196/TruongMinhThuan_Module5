import logo from './logo.svg';
import './App.css';
import AddComponents from "./components/AddComponents/AddComponents";

function App() {
    return (
        <div className="App">
            <AddComponents firstNumber={1} secondNumber={2}/>
        </div>
    );
}

export default App;
