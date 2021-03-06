import React , {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [initialData, setInitialData]=useState([{}])

  useEffect(()=>{
    fetch('/api').then(
      response => response.json()
    ).then(data => setInitialData(data))
  },[]);
  return (
    <div className="App">
      <h1>{initialData}</h1>
    </div>
  );
}

export default App;
