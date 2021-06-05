import React, { Component } from 'react';

import './AddBtn.css';

class AddBtn extends Component {
  render() {
    return (
      <div className="add-btn" onClick={this.props.onClick}>
        <div className="add-btn__inner">
          <div className="add-btn__line"></div>
        </div>
      </div>
    );
  }
}

export default AddBtn;
