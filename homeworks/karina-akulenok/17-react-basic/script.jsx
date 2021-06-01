const Light = (props) => {
  return (
    <div className={props.class ? `${props.class} light` : 'un-active light'}></div>
  );
}

const TrafficLight = () => {
  return (
    <div className="traffic-light">
      <div className="head"></div>
      <div className="body">
        <div className="lights">
          <Light class="red"/>
          <Light class="yellow"/>
          <Light class="green"/>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<TrafficLight />, document.querySelector('#root'));