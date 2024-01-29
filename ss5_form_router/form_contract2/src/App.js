import './App.css';
import ContractForm from "./component/ContractForm";
import {NavLink, Route, Routes} from "react-router-dom";
import ContractList from "./component/ContractList";
import ContractEdit from "./component/ContractEdit";
import NotFound from "./component/NotFound";

function App() {
  return (
      <>
          <NavLink to="/" className='mx-2' >Home</NavLink>
          <NavLink to="/create" >Create</NavLink>

          <Routes>
              <Route path='/' element={<ContractList/>}></Route>
              <Route path='/create' element={<ContractForm/>}></Route>
              <Route path='/edit/:id' element={<ContractEdit/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
          </Routes>
      </>

  );
}

export default App;
