import React, { useState } from 'react';

import './Overlay.css';

const Overlay = ({ children }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      {showOverlay && <div className="overlay"></div>}
      {children(setShowOverlay)}
    </>
  );
};

export default Overlay;
