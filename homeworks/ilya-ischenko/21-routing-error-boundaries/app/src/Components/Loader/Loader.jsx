import React from 'react';
import Box from '../Box/Box';
import spinner from '../../assets/001-spinner.svg';

import './Loader.css';

const Loader = () => (
  <Box>
    <img className="spinner" src={spinner} alt="spinner" />
  </Box>
);

export default Loader;
