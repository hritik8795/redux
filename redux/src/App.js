
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {incNumber,decNumber} from "./actions/index";

function App() {
  const myState =useSelector((state) => state.changeTheNumber)
  const dispatch =useDispatch()
  return (
    <div className="App">
      <h1>Increment and decrement counter </h1>

      <h4>using react and redux</h4>
      <div className ="quantity">
      <button className ="quantity_minus" title ="Decrement" onClick={() => dispatch(decNumber())}><span> - </span></button>
        <input name ="quantity" type="text" className="quantity_input" value={myState}/>
        <button className ="quantity_plus" title ="Increment" onClick={ () => dispatch(incNumber()) }><span> + </span></button>
      </div>
    </div>
  );
}

export default App;
