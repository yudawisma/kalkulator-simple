import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  function calculate() {
    const conditions = ['+', '-', '*', '/'];

    for (let el of conditions) {
      if (inputValue.includes(el)) {
        let splitArr = inputValue.split(el);

        const sum = () => {
          switch (el) {
            case '+':
              return Number(splitArr[0]) + Number(splitArr[1]);
            case '-':
              return Number(splitArr[0]) - Number(splitArr[1]);
            case '*':
              return Number(splitArr[0]) * Number(splitArr[1]);
            case '/':
              return Number(splitArr[0]) / Number(splitArr[1]);
            default:
              return '';
          }
        };

        setInputValue(sum().toString());
        return;
      }
    }

    return false;
  }

  const concatinput = (value) => {
    setInputValue(inputValue + value);
  };

  return (
    <div className="App">
      <header>
        <h1>Kalkulator Suyud</h1>
      </header>
      <section>
        <div>
          <button onClick={(e) => concatinput(e.target.value)} value="1">1</button>
          <button onClick={(e) => concatinput(e.target.value)} value="2">2</button>
          <button onClick={(e) => concatinput(e.target.value)} value="3">3</button>
          <button onClick={(e) => concatinput(e.target.value)} value="+">+</button>
        </div>
        <div>
          <button onClick={(e) => concatinput(e.target.value)} value="4">4</button>
          <button onClick={(e) => concatinput(e.target.value)} value="5">5</button>
          <button onClick={(e) => concatinput(e.target.value)} value="6">6</button>
          <button onClick={(e) => concatinput(e.target.value)} value="-">-</button>
        </div>
        <div>
          <button onClick={(e) => concatinput(e.target.value)} value="7">7</button>
          <button onClick={(e) => concatinput(e.target.value)} value="8">8</button>
          <button onClick={(e) => concatinput(e.target.value)} value="9">9</button>
          <button onClick={(e) => concatinput(e.target.value)} value="*">*</button>
        </div>
        <div>
          <button onClick={() => setInputValue('')}>C</button>
          <button onClick={(e) => concatinput(e.target.value)} value="0">0</button>
          <button onClick={calculate}>=</button>
          <button onClick={(e) => concatinput(e.target.value)} value="/">/</button>
        </div>
      </section>

      <section>
        <input type="text" value={inputValue} readOnly />
      </section>
    </div>
  );
}

export default App;
