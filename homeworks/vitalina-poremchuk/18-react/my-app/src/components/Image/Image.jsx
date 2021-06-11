import React, { Component } from 'react';
import './Image.scss';

class Image extends Component {
  render() {
    return (
      <div className='container__image'>
        <div
          className='image'
          key={this.props.index}
          style={{ backgroundImage: `url(${this.props.src})` }}
          onClick={this.props.onClick}
        ></div>
        <div className={this.props.loader && 'overlay loading'}></div>
      </div>
    );
  }
}

export default Image;
