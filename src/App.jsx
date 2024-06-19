import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useHistory } from "react-router-dom";

function App() {
  
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }


  return (
    <>
      
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={handleClick}>
          count is
        </button>
      
      </div>
      
    </>
  )
}

export default App
