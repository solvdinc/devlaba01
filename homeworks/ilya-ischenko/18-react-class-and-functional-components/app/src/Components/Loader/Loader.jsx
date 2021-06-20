import React, { Component } from 'react';

import './Loader.css';

class Loader extends React.Component {
  render() {
    return (
      <div className="lds-spinner loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Loader;
