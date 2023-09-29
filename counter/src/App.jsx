import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setcounter] = useState(5);
  let addValue = () => {
   setcounter (counter + 1);
  }
  const removeValue = () =>{
    setcounter (counter - 1);
  }
  return (
   <>
   <h2>Counter : {counter}</h2>
   <button onClick={addValue}>Add value</button>
   <button onClick={removeValue}>Remove value</button>
  </>
  )
}

export default App
