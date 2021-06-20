import React, { useState } from 'react';

import './Overlay.css';

const Overlay = ({ children }) => {
  const [isOverlay, setIsOverlay] = useState(false);

  return (
    <>
      {isOverlay && <div className="overlay"></div>}
      {children(setIsOverlay)}
    </>
  );
};

export default Overlay;
