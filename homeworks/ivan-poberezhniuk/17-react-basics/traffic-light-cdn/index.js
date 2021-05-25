/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
const TrafficBase = () => <div className="base" />;

function TrafficHull({ children }) {
  return <div className="hull">{children}</div>;
}

function TrafficLight({ color = 'disabled', active = false }) {
  const setColor = () => {
    switch (color) {
      case 'green':
        return 'green';
      case 'yellow':
        return 'yellow';
      case 'red':
        return 'red';
      default:
        return '';
    }
  };

  return <div className={`light  ${active ? setColor() : ''}`} />;
}

const App = () => {
  const [indexOfActiveLight, setindexOfActiveLight] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setindexOfActiveLight((indexOfActiveLight + 1) % 3);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="container">
      <TrafficHull>
        <TrafficBase />
        <TrafficLight color="red" active={indexOfActiveLight === 0} />
        <TrafficLight color="yellow" active={indexOfActiveLight === 2} />
        <TrafficLight color="green" active={indexOfActiveLight === 1} />
      </TrafficHull>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
