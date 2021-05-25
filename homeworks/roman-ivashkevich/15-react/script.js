const Light = (props) => {
  return (
    <div
      className="light"
      style={{ backgroundColor: props.active ? props.color : '#5B5B5B' }}
    ></div>
  );
};
class TrafficLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  countLight() {
    return this.state.initialValue === 2
      ? (this.state.initialValue = 0)
      : (this.state.initialValue += 1);
  }

  tick() {
    const lightCount = this.countLight();
    this.setState({
      initialValue: lightCount,
    });
  }

  render() {
    return (
      <div className="traffic-light-container">
        <div className="light-container">
          <Light color="#DF4040" active={this.state.initialValue === 0} />
          <Light color="#E9EC6A" active={this.state.initialValue === 1} />
          <Light color="#04CA00" active={this.state.initialValue === 2} />
        </div>
      </div>
    );
  }
}

const App = () => {
  return <TrafficLight initialValue={0} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
