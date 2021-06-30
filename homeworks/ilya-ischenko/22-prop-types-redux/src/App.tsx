import React from 'react';
import Button from './components/Buttons/Button';
import { useState, useRef } from 'react';
import ChartBars from './containers/ChartBars/ChartBars';
import RangeInput from './components/RangeInput/RangeInput';
import { useEffect } from 'react';

type NumObject = {
  [num: number]: number;
};

function App() {
  const [nums, setNums] = useState<NumObject>({});
  const [intervalId, setIntervalId] = useState<any>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [numsLength, setNumsLength] = useState(0);
  const rangeInputRef = useRef<HTMLInputElement | null>(null);

  const quantity: number = 10;

  useEffect(() => {
    initBars();
  }, []);

  function initBars() {
    const existNums = { ...nums };
    for (let i = 0; i < quantity; i++) {
      existNums[i] = 0;
    }

    setNumsLength(() => 0);
    setNums(() => existNums);
  }

  function addNum() {
    const randomNum: number = Math.floor(Math.random() * quantity);

    setNums((prev) => ({ ...prev, [randomNum]: prev[randomNum] + 1 }));
    setNumsLength((prev) => prev + 1);
  }

  function start() {
    if (rangeInputRef.current) {
      const intervalTime: number = +rangeInputRef.current.value;
      setIsStarted(() => true);

      if (intervalId) return;

      const interval: ReturnType<typeof setInterval> = setInterval(() => {
        addNum();
      }, intervalTime * 100);
      setIntervalId(interval);
    }
  }

  function stop() {
    setIsStarted(() => false);
    clearInterval(intervalId);
    setIntervalId(() => null);
  }

  function reset() {
    stop();
    initBars();
  }

  return (
    <>
      <ChartBars data={nums} numsLength={numsLength} />
      <div className="range-input">
        <RangeInput disabled={isStarted} ref={rangeInputRef} />
      </div>
      <div className="buttons-wrap">
        {isStarted ? (
          <div className="button">
            <Button onClick={stop}>stop</Button>
          </div>
        ) : (
          <div className="button">
            <Button onClick={start}>start</Button>
          </div>
        )}
        <div className="button">
          <Button onClick={reset}>reset</Button>
        </div>
      </div>
    </>
  );
}

export default App;
