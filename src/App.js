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
    // Anonymous function ensure Operation is current State
    // Prevents recreation of state
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

// const handler = ()=>{} -> Variable hoding a function reference
// handler() -> Calling the function
// handler -> Passing function reference

// When Function is to be executed from a different file
// handle
// Send data and function to other component
// Method - 1 
// handle.bind(this, args1, arg2)
// MEthod - 2
// () => handle(arg)
// Here an anomymous function with method reference is sent to other file
// When certain operation is performed, the method referenc will be executed
