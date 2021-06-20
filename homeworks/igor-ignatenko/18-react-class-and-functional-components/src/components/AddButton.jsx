import React, { Component } from 'react';
import './AddButton.css';

class AddButton extends Component {
  render() {
    return (
      <button className='card-button-add' onClick={this.props.onClick} />
    );
  }
};

export default AddButton;