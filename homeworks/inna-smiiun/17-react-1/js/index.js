const Circle = ({baseColor, activeColor}) => (
    <div
        className='circle'
        style={{backgroundColor: activeColor ? baseColor : '#5B5B5B'}}
    />
);

const TrafficLight = () => {
    const [activateLight, setColor] = React.useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            switch (activateLight) {
                case 2: {
                    setColor(0);
                    break;
                }
                case 1: {
                    setColor(2);
                    break;
                }
                case 0: {
                    setColor(1);
                    break;
                }
            }
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    });

    return (
        <div className='traffic-light'>
            <div className='traffic-light__container'>
                <Circle baseColor='#DF4040' activeColor={activateLight === 0}/>
                <Circle baseColor='#E9EC6A' activeColor={activateLight === 1}/>
                <Circle baseColor='#04CA00' activeColor={activateLight === 2}/>
            </div>
        </div>
    );
};

ReactDOM.render(<TrafficLight/>, document.getElementById('root'));
