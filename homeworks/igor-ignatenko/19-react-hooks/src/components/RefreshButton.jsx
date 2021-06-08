import React from 'react';
import './RefreshButton.css';

const RefreshButton = ({ onClick}) => (
    <button className='user-button-refresh' onClick={onClick} > Refresh All </button>
)

export default RefreshButton;