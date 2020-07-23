import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './Char/Char';

function App() {
  const [userInputState, setUserInputState] = useState({
    userInput: '',
  });

  const inputChangeHandler = (event) => {
    setUserInputState({
      userInput: event.target.value,
    });
  };

  const deleteCharHandler = (index) => {
    const text = userInputState.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    setUserInputState({
      userInput: updatedText
    })
  }

  const charList = userInputState.userInput.split('').map((ch, index) => {
    return <Char character={ch} key={index} click={()=>deleteCharHandler(index)}/>;
  });

  return (
    <div className='App'>
      <input
        type='text'
        onChange={inputChangeHandler}
        value={userInputState.userInput}
      />

      <p> {userInputState.userInput} </p>
      <Validation inputLength={userInputState.userInput.length} />
      {charList}
    </div>
  );
}

export default App;
