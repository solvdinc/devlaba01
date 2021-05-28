// import React, { useState, useEffect } from 'react';

const TrafficLight = ({ children }) => {
  return (
    <div className="traffic-light">
      {children}
    </div>
  );
};

const Light = ({ active, activeColor }) => {
  return (
    <div className="light">
      <div className="light__inner" style={{ background: active ? activeColor : '' }}></div>
    </div>
  )
};

const App = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const lights = [
    {
      activeColor: '#DF4040'
    },
    {
      activeColor: '#E9EC6A'
    },
    {
      activeColor: '#04CA00'
    },
  ];

  React.useEffect(() => {
    let lightDuration = setTimeout(() => {
      setActiveIndex(activeIndex === lights.length - 1 ? 0 : activeIndex + 1);
    }, 2000);

    return () => {
      setTimeout(lightDuration);
    }
  })

  return (
    <TrafficLight>
      {
        lights.map((light, index) => (
          <Light 
            key={index}
            active={ activeIndex === index } 
            activeColor={ light.activeColor }
          />
        ))
      }
    </TrafficLight>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));