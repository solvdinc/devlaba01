const Light = ({active, className}) => {
  return (
    <div className={active ? `${className} light` : 'un-active light'}></div>
  );
}

const TrafficLight = () => {
  const [activeColor, setActiveColor] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setActiveColor((activeColor + 1) % 3);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="traffic-light">
      <div className="head"></div>
      <div className="body">
        <div className="lights">
          <Light active={activeColor === 0} className='red'/>
          <Light active={activeColor === 1} className='yellow'/>
          <Light active={activeColor === 2} className='green'/>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<TrafficLight />, document.querySelector('#root'));