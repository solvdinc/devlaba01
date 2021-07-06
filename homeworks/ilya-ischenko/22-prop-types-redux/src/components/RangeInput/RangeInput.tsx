import React from 'react';

type RangeInputProps = {
  disabled: boolean;
};

const RangeInput = React.forwardRef(
  ({ disabled }: RangeInputProps, ref: any) => (
    <input disabled={disabled} type="range" min="1" max="10" ref={ref} />
  ),
);

export default RangeInput;
