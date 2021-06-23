import React from 'react';

import './Box.css';

const Box = ({ children }) => (
  <div className="box">
    <div className="box__inner">{children}</div>
  </div>
);

export default Box;
