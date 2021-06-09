const Light = ({active, className}) => {
  return (
    <div className={active ? `${className} light` : 'un-active light'}></div>
  );
}

const Red = () => {
  return (
    <TrafficLight active={1} className='red'/>
  )
};

const Yellow = () => {
  return (
    <TrafficLight active={2} className='yellow'/>
  )
};

const Green = () => {
  return (
    <TrafficLight active={3} className='green'/>
  )
};

const LightsState = [
  Red, Yellow, Green,
];

let active = 0;

const TrafficLight = ({active, className}) => {
  return (
    <div className="traffic-light">
      <div className="head"></div>
      <div className="body">
        <div className="lights">
          <Light className={className} active={active === 1}/>
          <Light className={className} active={active === 2}/>
          <Light className={className} active={active === 3}/>
        </div>
      </div>
    </div>
  );
};

function timer(){
  setInterval(() => {
    active = (active + 1) % 3;
    const ActiveLight = LightsState[active];
    ReactDOM.render(<ActiveLight/>, document.getElementById('root'));
  }, 1000);
}

timer();