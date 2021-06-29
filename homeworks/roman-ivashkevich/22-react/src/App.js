import { useState } from 'react';
import './App.css';

function App() {
  const [inputRange, setInputRange] = useState(0.1);

  const toggleInputRange = (e) => {
    setInputRange(+e.target.value);
  };

  const toggleStartBtn = () => {
    console.log(inputRange);
  };

  return (
    <div className="App">
      <div className="normal-distribution">
        <div className="chart-container">
          <div className="chart"></div>
          <div className="chart"></div>
          <div className="chart"></div>
          <div className="chart"></div>
          <div className="chart"></div>
          <div className="chart"></div>
          <div className="chart"></div>
          <div className="chart"></div>
          <div className="chart"></div>
          <div className="chart"></div>
        </div>
        <input
          className="range-input"
          type="range"
          min="0.1"
          max="1"
          step="0.1"
          onChange={toggleInputRange}
        />
        <div className="btn-container">
          <button
            className="normal-distribution-btn"
            type="button"
            onClick={toggleStartBtn}
          >
            Start
          </button>
          <button className="normal-distribution-btn" type="button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
