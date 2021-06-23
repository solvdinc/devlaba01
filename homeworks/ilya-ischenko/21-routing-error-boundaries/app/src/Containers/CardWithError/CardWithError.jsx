import React from 'react';
import Button from '../../components/Button/Button';
import Box from '../../components/Box/Box';
import errorIcon from '../../assets/001-error.svg';

import './CardWithError.css';

const CardWithError = ({ error, resetErrorBoundary }) => {
  return (
    <Box>
      <div className="error-card">
        <img src={errorIcon} alt="Error" />
        <Button onClick={resetErrorBoundary} mix="red">
          refresh
        </Button>
      </div>
    </Box>
  );
};

export default CardWithError;
