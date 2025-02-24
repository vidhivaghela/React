import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  //let counter = 15;

  const addValue = () => {
    if(counter<20){
    console.log("Clicked", counter);
    //counter = counter + 1;
    setCounter(counter + 1);
    }
    else{
      alert("Cannot add more than 20")
    }
  }

  const removeValue = () => {
    if(counter>0){
      console.log("CLicked", counter);
      setCounter(counter - 1);
    }
    else{
      alert("Cannot decrease anymore");
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      
      <button
      onClick={addValue}>Add value</button>
      <br/>
      <button
      onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
