import './App.css';
import React from 'react';
import axios from 'axios'

function App() {

  function startHoudini() {
    axios.post('http://localhost:5000/houdini/start').then(response => {
      console.log("SUCCESS", response)
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  function makeRed() {
    axios.post('http://localhost:5000/houdini/sphere/red').then(response => {
      console.log("SUCCESS", response)
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  function makeGreen() {
    axios.post('http://localhost:5000/houdini/sphere/green').then(response => {
      console.log("SUCCESS", response)
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
      <div className="App">
        <header className="App-header">
          <p>This is the Houdini frontend in React!</p>
          <button onClick={startHoudini}>Start Houdini</button>
          <button onClick={makeRed}>Make sphere red</button>
          <button onClick={makeGreen}>Make sphere green</button>
        </header>
      </div>
  );
}

export default App;
