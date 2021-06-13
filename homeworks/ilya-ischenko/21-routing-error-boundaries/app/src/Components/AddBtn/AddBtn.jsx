import React from 'react';
import Box from '../Box/Box.jsx';

import './AddBtn.css';

const AddBtn = ({ onClick }) => (
  <Box>
    <div className="add-btn" onClick={onClick}>
      <div className="add-btn__line"></div>
    </div>
  </Box>
);

export default AddBtn;
