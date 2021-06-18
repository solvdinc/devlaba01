import React from 'react';
import Error from '../assets/001-error.svg';
import Button from '../components/Button'
import './CardWithError.css';

const CardWithError = ({ error, resetErrorBoundary }) => (
    <>
        <div className='card'>
            <div className='card-error'>
                <img src={Error} alt='Error' className='error-icon' />
                <Button onClick={resetErrorBoundary}>Refresh</Button>
            </div>
        </div>
    </>
)

export default CardWithError;