import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Validation from './ValidationComponent/ValidationComponent';

function App() {
  const [userInputState, setUserInputState] = useState({
    userInput: '',
  });

  const inputChangeHandler = (event) => {
    setUserInputState({
      userInput: event.target.value,
    });
  };

  return (
    <div className='App'>
      <input
        type='text'
        onChange={inputChangeHandler}
        value={userInputState.userInput}
      />

      <p> {userInputState.userInput} </p>
      <Validation inputLength={userInputState.userInput.length} />
    </div>
  );
}

export default App;
