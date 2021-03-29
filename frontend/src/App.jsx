import React, {useEffect, useState} from 'react'
// import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('')

  // useEffect(() => {
  //   fetch('/api')
  //   .then((res) => res.json())
  //   .then((data) => setMessage(data.message));
  // }, [])

  useEffect(() => {
    fetch('/list')
    .then((res) => res.json())
    .then((data) => setMessage(data.email))
  }, [])

  return (
    <div className="App">
      <h1>フロントエンド</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
