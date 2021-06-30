import './Chart.css';
import Bar from '../Bar/Bar';

const Chart = ({ barsConfig }) => {
  const TOP_BAR = 'red';
  const bars = [...barsConfig];
  const sortBarsConfig = bars.sort((a, b) => (a.height > b.height ? -1 : 1));

  const [max1, max2] = sortBarsConfig;

  return (
    <div className="chart">
      {barsConfig.map((bar, i) => {
        if (i === +Object.keys(max1)[0] || i === +Object.keys(max2)[0]) {
          return <Bar key={i} className={TOP_BAR} height={bar.height} />;
        } else {
          return <Bar key={i} height={bar.height} />;
        }
      })}
    </div>
  );
};

export default Chart;
