import React from 'react';

import './AddBtn.css';

const AddBtn = ({ onClick }) => (
  <div className="add-btn-wrap">
    <button className="add-btn" onClick={onClick}>
      <div className="add-btn__line"></div>
    </button>
  </div>
);

export default AddBtn;
