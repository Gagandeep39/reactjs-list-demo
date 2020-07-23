import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [userInputState, setUserInputState] = useState({
    userInput: '',
  });

  const inputChangeHandler = (event) => {
    setUserInputState({
      userInput: event.target.value
    })
  }

  return (
    <div className='App'>
      <input 
      type='text' 
      onChange={inputChangeHandler}
      value={userInputState.userInput} />

      <p> {userInputState.userInput} </p>
    </div>
  );
}

export default App;
