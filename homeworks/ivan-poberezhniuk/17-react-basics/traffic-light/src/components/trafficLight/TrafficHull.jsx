import React from 'react';
import PropTypes from 'prop-types';

import { hull } from './Traffic.module.scss';

function TraffictHull({ children }) {
  return <div className={hull}>{children}</div>;
}

TraffictHull.propTypes = {};

export default TraffictHull;
