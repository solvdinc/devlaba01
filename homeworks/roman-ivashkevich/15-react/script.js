let initialLight = -1;

const Light = (props) => {
  return (
    <div
      className="light"
      style={{ backgroundColor: props.active ? props.color : '#5B5B5B' }}
    ></div>
  );
};

const TrafficLight = (props) => {
  return (
    <div className="traffic-light-container">
      <div className="light-container">
        <Light color="#DF4040" active={props.initialValue === 0} />
        <Light color="#E9EC6A" active={props.initialValue === 1} />
        <Light color="#04CA00" active={props.initialValue === 2} />
      </div>
    </div>
  );
};

const updateLight = () => {
  const App = () => {
    return <TrafficLight initialValue={initialLight} />;
  };

  initialLight === 2 ? (initialLight = 0) : (initialLight += 1);

  ReactDOM.render(<App />, document.getElementById('root'));
};

setInterval(updateLight, 2000);
