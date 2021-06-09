import React from 'react';
import CardsField from './Containers/CardsField/CardsField.jsx';
import Overlay from './Containers/Overlay/Overlay.jsx';

const App = () => {
  return (
    <Overlay>
      {(setIsOverlay) => <CardsField setIsOverlay={setIsOverlay} />}
    </Overlay>
  );
};

export default App;
