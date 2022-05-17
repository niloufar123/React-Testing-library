import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {
  const [buttonColor,setButtonColor]=useState('red');
  const newButtonColor=buttonColor == 'red'? 'blue': 'red';
  const [disable,setDisable]=useState(false)
  return (
    <div className="App">
    <button style={{backgroundColor:disable ? 'gray' : buttonColor}} onClick={()=>setButtonColor(newButtonColor)} disabled={disable}>change to {newButtonColor}</button>
    <div>
      <label htmlFor="checkbox">disabled button</label>
      <input type="checkbox" name="checkbox" id="checkbox" onChange={()=>setDisable(!disable)} />
    </div>
    </div>
  );
}

export default App;
