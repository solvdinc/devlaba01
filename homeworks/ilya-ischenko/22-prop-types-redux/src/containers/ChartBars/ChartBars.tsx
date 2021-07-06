import React from 'react';
import Bar from '../../components/Bar/Bar';

import styles from './ChartBars.module.scss';

type ChartBarsProps = {
  data: object;
  numsLength: number;
};

const ChartBars = ({ data, numsLength }: ChartBarsProps) => {
  const dataArr: any[] = Object.entries(data);
  dataArr.sort((a, b) => b[1] - a[1]);

  const [max1, max2] = dataArr;

  return (
    <div className={styles.chartBar}>
      {Object.entries(data).map(([key, value]) => {
        if (+key === +max1[0] || +key === +max2[0]) {
          return <Bar key={key} height={numsLength ? (value / numsLength) * 100 : 0} mix="red" />;
        } else {
          return <Bar key={key} height={numsLength ? (value / numsLength) * 100 : 0} />;
        }
      })}
    </div>
  );
};

export default ChartBars;
