import './Button.css';

type buttonProps = {
    onClick: React.MouseEventHandler;
    children: string;
}
const Button = ({ children, onClick }: buttonProps) => (
    <button className='button' onClick={onClick}>{children}</button>
);

export default Button;
