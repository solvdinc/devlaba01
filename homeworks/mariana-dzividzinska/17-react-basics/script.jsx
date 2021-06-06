/* eslint-disable react/prop-types */
const Light = ({ color }) => (<div className="light" style={{ background: color }} />);
const TrafficBaseStrucure = ({ position, color }) => {
  const lightArr = Array(3).fill(<Light />);
  lightArr[position] = <Light color={color} />;
  return (
    <div className="container">
      <div className="head" />
      <div className="body" />
      <div className="lights-wrapper">
        {lightArr}
      </div>
    </div>
  );
};

const TrafficLightRed = () => (<TrafficBaseStrucure position={0} color="#DF4040" />);

const TrafficLightYellow = () => (<TrafficBaseStrucure position={1} color="#E9EC6A" />);

const TrafficLightGreen = () => (<TrafficBaseStrucure position={2} color="#04CA00" />);

const trafficLightState = [
  TrafficLightRed, TrafficLightYellow, TrafficLightGreen,
];

let point = -1;
function nextState() {
  point = (point + 1) % 3;
  const Component = trafficLightState[point];

  ReactDOM.render(<Component />, document.getElementById('root'));
}

function trafficLightTimer() {
  setInterval(() => {
    nextState();
  }, 1000);
}

trafficLightTimer();
