import './Column.css'

type columnsProps ={ 
    height: number;
    className: string;
}

const Column = ({height, className}: columnsProps) => (
    <div className={className} style= {{ height: `${height}%`}} />
)

export default Column;
