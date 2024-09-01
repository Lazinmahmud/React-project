import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly className="input" />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleInput('1')} className="btn">1</button>
        <button onClick={() => handleInput('2')} className="btn">2</button>
        <button onClick={() => handleInput('3')} className="btn">3</button>
        <button onClick={() => handleInput('+')} className="btn operator">+</button>
        <button onClick={() => handleInput('4')} className="btn">4</button>
        <button onClick={() => handleInput('5')} className="btn">5</button>
        <button onClick={() => handleInput('6')} className="btn">6</button>
        <button onClick={() => handleInput('-')} className="btn operator">-</button>
        <button onClick={() => handleInput('7')} className="btn">7</button>
        <button onClick={() => handleInput('8')} className="btn">8</button>
        <button onClick={() => handleInput('9')} className="btn">9</button>
        <button onClick={() => handleInput('*')} className="btn operator">*</button>
        <button onClick={() => handleInput('0')} className="btn">0</button>
        <button onClick={() => handleInput('.')} className="btn">.</button>
        <button onClick={calculateResult} className="btn operator">=</button>
        <button onClick={() => handleInput('/')} className="btn operator">/</button>
        <button onClick={clearInput} className="btn clear">Clear</button>
      </div>
    </div>
  );
}

export default Calculator;