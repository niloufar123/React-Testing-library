import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {
  const [buttonColor,setButtonColor]=useState('red');
  const newButtonColor=buttonColor == 'red'? 'blue': 'red';
  const [disable,setDisable]=useState(false)
  return (
    <div className="App">
    <button style={{backgroundColor:buttonColor}} onClick={()=>setButtonColor(newButtonColor)} disabled={disable}>change to {newButtonColor}</button>
    <div>
      <input type="checkbox" name="checkbox" onChange={()=>setDisable(!disable)} />
    </div>
    </div>
  );
}

export default App;
