import './InputRange.css'

type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
};

const InputRange = ({ onChange, disabled }: InputProps) => (
    <>
        <input className='input'
            type='range'
            min='0.1'
            max='1'
            step='0.1'
            disabled={disabled}
            onChange={onChange}
        />
        <datalist className='input-list'>
            <option>0.1s</option>
            <option>1s</option>
        </datalist>
    </>
);

export default InputRange;
