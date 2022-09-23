/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react';
import { useState } from 'react';
import ReactSlider from 'react-slider';
import { setPrice } from '../../../store/filter/filterSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import { StyledContainer } from './PriceFilter.styles';

type PropType = {
  onBlur: () => void;
};

const PriceFilter: FC<PropType> = ({ onBlur }) => {
  const filter = useAppSelector((state) => state.filter.price);
  const [value, setValue] = useState([filter.minPrice, filter.maxPrice]);
  const dispatch = useAppDispatch();

  const onChange = (value: number[]) => {
    setValue(value);
    dispatch(setPrice({ minPrice: value[0], maxPrice: value[1] }));
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
