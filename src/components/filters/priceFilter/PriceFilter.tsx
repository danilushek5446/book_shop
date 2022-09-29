/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC, RefObject } from 'react';
import { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';

import { setPrice } from '../../../store/filter/filterSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import { StyledContainer } from './PriceFilter.styles';

type PropType = {
  onBlur: () => void;
  dropDownRef: RefObject<HTMLDivElement>;
};

const PriceFilter: FC<PropType> = ({ onBlur, dropDownRef }) => {
  const filter = useAppSelector((state) => state.filter.price);
  const [value, setValue] = useState([filter.minPrice, filter.maxPrice]);
  const dispatch = useAppDispatch();

  const onChange = (value: number[]) => {
    setValue(value);
    dispatch(setPrice({ minPrice: value[0], maxPrice: value[1] }));
  };

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (!dropDownRef.current) {
        return;
      }
      if (!dropDownRef.current.contains(e.target as Node)) {
        onBlur();
      }
    };

    document.body.addEventListener('click', closeDropdown);

    return () => document.body.removeEventListener('click', closeDropdown);
  });

  return (
    <StyledContainer className="drop-down-list">
      <ReactSlider
        value={value}
        onAfterChange={(value) => onChange(value)}
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
