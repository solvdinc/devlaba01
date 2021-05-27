const Light = ({ style }) => (
  <div className = 'light'
  style={{
    ...style
  }}
  />
);

const Green = ({active}) => (
  <Light
    style={{
      backgroundColor: active ? '#00FF00' : '#5B5B5B',
    }}
  />
);

const Red = ({active}) => (
  <Light
    style={{
      backgroundColor: active ? '#DF4040' : '#5B5B5B',
    }}
  />
);

const Yellow = ({active}) => (
  <Light
    style={{
      backgroundColor: active ? '#E9EC6A': '#5B5B5B',
    }}
  />
);

const lightDuration = 1500;

const TrafficLight = ({value}) =>{
  const [colorIndex, setColorIndex] = React.useState(value);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3);
    }, lightDuration);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className='container'>
      <Red active={colorIndex === 0}/>
      <Yellow active={colorIndex === 1}/>
      <Green active={colorIndex === 2}/>
    </div>
  );
};

const App = () => {
  return (
    <TrafficLight value={0} />
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
