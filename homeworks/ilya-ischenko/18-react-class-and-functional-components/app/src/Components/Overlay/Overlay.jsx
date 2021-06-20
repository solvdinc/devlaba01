import React, { Component } from 'react';

import './Overlay.css';

class Overlay extends Component {
  render() {
    return <div className="overlay">{this.props.children}</div>;
  }
}

export default Overlay;
