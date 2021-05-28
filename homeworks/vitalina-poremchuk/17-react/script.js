const Light = ({ color, active }) => (
  <div
    className='light'
    style={{ backgroundColor: active ? color : '#5B5B5B' }}
  />
);

const TrafficLight = () => {
  const [activatedLight, setActivatedLight] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (activatedLight === 2) {
        setActivatedLight(1);
      } else if (activatedLight === 1) {
        setActivatedLight(2);
      } else if (activatedLight === 0) {
        setActivatedLight(2);
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className='trafficLight'>
      <div className='trafficLight__light'>
        <Light color='#DF4040' active={activatedLight === 0} />
        <Light color='#E9EC6A' active={activatedLight === 2} />
        <Light color='#04CA00' active={activatedLight === 1} />
      </div>
    </div>
  );
};

ReactDOM.render(<TrafficLight />, document.getElementById('root'));
