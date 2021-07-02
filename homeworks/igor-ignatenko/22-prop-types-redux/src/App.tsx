import React, { FC, useEffect, useState } from 'react'
import Columns from './components/Columns';
import Button from './components/Button';
import InputRange from './components/InputRange';
import './App.css';

type ObjectNumbers = {
  [numbers: number]: number;
}

function App() {
  const COLUMN_QUANTITY = 10;
  const [numbers, setNumbers] = useState<ObjectNumbers>({});
  const [numberLength, setNumberLength] = useState(0)
  const [inputValue, setInputValue] = useState(0.1);
  const [started, setStarted] = useState(false);
  const [interval, setIntervalRange] = useState<any>('')

  useEffect(() => {
    createBars();
  }, []);

  const createBars = () => {
    const prevValue = { ...numbers };
    for (let i = 0; i < COLUMN_QUANTITY; i++) {
      prevValue[i] = 0;
    }

    setNumbers(prevValue);
    setNumberLength(0);
  }

  const getRandomNumber = () => {
    const randomNumber: number = Math.floor(Math.random() * COLUMN_QUANTITY);

    setNumbers(prev => ({ ...prev, [randomNumber]: prev[randomNumber] + 1 }));
    setNumberLength(prev => prev + 1);
  };

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const myValue: number = +e.target.value;
    setInputValue(myValue);
  }

  const start = () => {
    setStarted(true);
    //NodeJS.TimeOut
    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      getRandomNumber();
    }, inputValue * 100);
    setIntervalRange(interval);
  }

  const stop = () => {
    setStarted(false);
    clearInterval(interval);
  }

  const reset = () => {
    stop();
    createBars();
  }

  return (
    <div className='App'>
      <div className='input-range'>
        <Columns numbers={numbers} numberLength={numberLength} />
        <InputRange
          disabled={started}
          onChange={handler}
        />
        <div className='buttons'>
          {started ?
            <Button onClick={stop}>STOP</Button>
            :
            <Button onClick={start}>START</Button>
          }
          <Button onClick={reset}>RESET</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
