import React, { Component } from 'react';
import './RefreshButton.css';

class RefreshButton extends Component {
    render() {
        return (<button className='user-button-refresh' onClick={this.props.onClick} > Refresh All </button>)
    }
};

export default RefreshButton