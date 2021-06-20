/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
const TrafficBase = () => <div className="base" />;

const TrafficHull = ({ children }) => <div className="hull">{children}</div>;

const TrafficLight = ({ color = 'disabled', active = false }) => {
  return <div className={`light  ${active ? color : ''}`} />;
};

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
