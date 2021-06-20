import React from 'react';
import CardsField from './containers/CardsField/CardsField.jsx';
import Overlay from './containers/Overlay/Overlay.jsx';

const App = () => {
  return (
    <Overlay>
      {(setIsOverlay) => <CardsField setIsOverlay={setIsOverlay} />}
    </Overlay>
  );
};

export default App;
