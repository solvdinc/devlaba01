import './Columns.css';
import Column from './Column';

type ColumnsProps = {
  numbers: object;
  numberLength: number;
}

const Columns = ({ numbers, numberLength }: ColumnsProps) => {
  const numbersArr = Object.entries(numbers);
  numbersArr.sort((a, b) => b[1] - a[1]);

  const [max1, max2] = numbersArr;

  return (
    <div className='input-range-columns'>
      {Object.entries(numbers).map(([key, value]) => {
        return <Column
          key={key}
          className={`column${(+key === +max1[0] || +key === +max2[0]) ? '_max' : ''}`}
          height={numberLength ? (value / numberLength) * 100 : 0} />
      })}
    </div>
  )
}

export default Columns;
