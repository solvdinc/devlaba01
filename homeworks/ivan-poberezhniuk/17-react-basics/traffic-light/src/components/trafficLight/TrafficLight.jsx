import React from 'react';
import PropTypes from 'prop-types';
import { light, green, yellow, red } from './Traffic.module.scss';

const TrafficLight = ({ color = 'disabled', active = false }) => {
  const setColor = () => {
    switch (color) {
      case 'green':
        return green;
      case 'yellow':
        return yellow;
      case 'red':
        return red;
      default:
        return;
    }
  };

  return <div className={`${light}  ${active ? setColor() : ''}`} />;
};

TrafficLight.propTypes = {
  color: PropTypes.string,
};

export default TrafficLight;
