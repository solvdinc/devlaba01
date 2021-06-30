import { useEffect, useState } from 'react';
import './App.css';
import Chart from './components/Chart/Chart';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  const NUMBER_OF_BARS = 10;
  const [inputRange, setInputRange] = useState(0.1);
  const [barsConfig, setBarsConfig] = useState([]);
  const [start, setStart] = useState(false);

  useEffect(() => {
    createInitialBars();
  }, []);

  const createInitialBars = () => {
    let config = [];
    for (let i = 0; i < NUMBER_OF_BARS; i += 1) {
      config[i] = { [i]: 0, height: 0 };
    }

    setBarsConfig(config);
  };

  const toggleInputRange = (e) => {
    setInputRange(+e.target.value);
  };

  const getRandomNumber = () => {
    const max = NUMBER_OF_BARS - 1;
    const min = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    let intervalId;

    if (start) {
      intervalId = setInterval(() => {
        const randNum = getRandomNumber();
        const updateBarsConfig = barsConfig.map((bar, i) =>
          i === randNum
            ? Object.fromEntries(
                Object.entries(bar).map(([key, value]) => [key, (value += 1)]),
              )
            : bar,
        );
        setBarsConfig(updateBarsConfig);
      }, inputRange * 100);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [barsConfig, inputRange, start]);

  const toggleStartBtn = () => {
    setStart(true);
  };

  const toggleStopBtn = () => {
    setStart(false);
  };

  const toggleResetBtn = () => {
    createInitialBars();
  };

  return (
    <div className="App">
      <div className="normal-distribution">
        <Chart barsConfig={barsConfig} />
        <Input
          disabled={start}
          type="range"
          min="0.1"
          max="1"
          step="0.1"
          onChange={toggleInputRange}
        />
        <div className="btn-container">
          {!start ? (
            <Button type="button" onClick={toggleStartBtn}>
              Start
            </Button>
          ) : (
            <Button type="button" onClick={toggleStopBtn}>
              Stop
            </Button>
          )}
          <Button type="reset" onClick={toggleResetBtn}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
