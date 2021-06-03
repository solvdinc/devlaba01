import { useState, useEffect } from 'react';

import TrafficBase from './components/trafficLight/TrafficBase';
import TrafficLight from './components/trafficLight/TrafficLight';
import TrafficHull from './components/trafficLight/TrafficHull';
import { container } from './App.module.scss';

const App = () => {
  const [indexOfActiveLight, setindexOfActiveLight] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setindexOfActiveLight((indexOfActiveLight + 1) % 3);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className={container}>
      <TrafficHull>
        <TrafficBase />
        <TrafficLight color="red" active={indexOfActiveLight === 0} />
        <TrafficLight color="yellow" active={indexOfActiveLight === 2} />
        <TrafficLight color="green" active={indexOfActiveLight === 1} />
      </TrafficHull>
    </div>
  );
};

export default App;
