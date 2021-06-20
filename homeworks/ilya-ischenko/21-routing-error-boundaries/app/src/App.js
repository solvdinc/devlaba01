import React from 'react';
import CardsField from './containers/CardsField/CardsField.jsx';
import Overlay from './containers/Overlay/Overlay.jsx';

const App = () => {
  return (
    <Overlay>
      {(setShowOverlay) => <CardsField setShowOverlay={setShowOverlay} />}
    </Overlay>
  );
};

export default App;
