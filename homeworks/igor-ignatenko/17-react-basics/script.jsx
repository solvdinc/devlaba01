
const TrafficLightCell = ({ color, active }) => {
  return (
    <div
      className='traffic-light-cell'
      style={{ backgroundColor: active ? color : '#5B5B5B' }}
    />
  );
};

const TrafficLightHeader = () => <div className='traffic-light-header'></div>;

const TrafficLight = () => {
  const colors = ['#DF4040', '#E9EC6A', '#04CA00'];
  const [activeCellIndex, setColorIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setColorIndex((activeCellIndex + 1) % 3);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className='traffic-light'>
      <TrafficLightHeader />
      {colors.map((item, index) => {
        return <TrafficLightCell key={item} color={item} active={activeCellIndex === index} />
      })}
    </div>
  );
};

function App() {
  return (
    <div className="wrapper">
      <TrafficLight />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));