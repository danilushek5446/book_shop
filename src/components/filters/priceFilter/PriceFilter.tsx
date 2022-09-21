/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react';
import { useState } from 'react';
import ReactSlider from 'react-slider';

import { StyledContainer } from './PriceFilter.styles';

const PriceFilter: FC = () => {
  const [value, setValue] = useState([0, 100]);

  const onChange = (value: number[]) => {
    setValue(value);
  };

  return (
    <StyledContainer className="drop-down-list">
      <ReactSlider
        value={value}
        onChange={(value) => onChange(value)}
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
      <div className="text-container">
        <span className="min">$ {value[0]}</span>
        <span className="max">$ {value[1]}</span>
      </div>
    </StyledContainer >
  );
};

export default PriceFilter;
