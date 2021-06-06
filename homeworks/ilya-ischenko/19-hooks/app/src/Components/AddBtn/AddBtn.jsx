import React from 'react';

import './AddBtn.css';

const AddBtn = ({ onClick }) => (
  <div className="add-btn">
    <div className="add-btn__inner" onClick={onClick}>
      <div className="add-btn__line"></div>
    </div>
  </div>
);

export default AddBtn;
