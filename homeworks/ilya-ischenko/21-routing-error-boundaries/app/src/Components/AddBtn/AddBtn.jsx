import React from 'react';
import Box from '../Box/Box.jsx';

import './AddBtn.css';

const AddBtn = ({ onClick }) => (
  <Box>
    <button className="add-btn" onClick={onClick}>
      <div className="add-btn__line"></div>
    </button>
  </Box>
);

export default AddBtn;
