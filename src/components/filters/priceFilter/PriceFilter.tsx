/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC, RefObject } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactSlider from 'react-slider';

import { StyledContainer } from './PriceFilter.styles';

type PropType = {
  onBlur: () => void;
  dropDownRef: RefObject<HTMLDivElement>;
};

const PriceFilter: FC<PropType> = ({ onBlur, dropDownRef }) => {
  const [value, setValue] = useState([0, 100]);
  const [searchQuery, setSearchQuery] = useSearchParams();

  const onChange = (value: number[]) => {
    setValue(value);

    searchQuery.set('priceMin', value[0].toString());
    searchQuery.set('priceMax', value[1].toString());
    setSearchQuery(searchQuery);
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

  useEffect(() => {
    const priceMin = +(searchQuery.get('priceMin') || 0);
    const priceMax = +(searchQuery.get('priceMax') || 100);

    setValue([priceMin, priceMax]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
