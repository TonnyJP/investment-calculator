import { useState } from 'react';
import './App.css';
import { Header, Result, UserInput } from './components';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;
  return (
    <>
      <Header />
      <UserInput userInput={userInput} setUserInput={setUserInput} />
      {!inputIsValid && (
        <p className='center'>Please enter a duration greater than zero</p>
      )}
      {inputIsValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
