const Light = ({ style }) => (
  <div className = 'light'
  style={{
    ...style
  }}
  />
);

const Green = () => (
  <Light
    style={{
      backgroundColor: "#00FF00",
    }}
  />
);

const Red = () => (
  <Light
    style={{
      backgroundColor: "#DF4040",
    }}
  />
);

const Yellow = () => (
  <Light
    style={{
      backgroundColor: "#E9EC6A",
    }}
  />
);

const TrafficLight = () =>{
  return (
    <div className='container'>
      <Red />
      <Yellow />
      <Green />
    </div>
  );
};

ReactDOM.render(<TrafficLight />, document.querySelector('#root'));
