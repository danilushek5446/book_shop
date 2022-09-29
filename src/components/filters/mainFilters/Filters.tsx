import { useRef, useState } from 'react';
import type { FC } from 'react';

import polygon from '../../../assets/icons/Polygon 4.png';
import DropDownButton from '../../dropDown/DropDownButton';
import GenereFilters from '../genereFilters/GenereFilters';
import PriceFilter from '../priceFilter/PriceFilter';
import SordDirection from '../sortDirection/SordDirection';
import { StyledContainer } from './Filters.styles';

const Filters: FC = () => {
  const [isOpen, setIsOpen] = useState('');
  const genereRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  const onClick = (className: string) => {
    if (isOpen !== className) {
      setIsOpen(className);
    } else {
      setIsOpen('');
    }
  };

  const onBlur = () => {
    setIsOpen('');
  };

  return (
    <StyledContainer className="filters">
      <h2>Catalog</h2>
      <div className="container">
        <DropDownButton
          dropDownRef={genereRef}
          className="genere genere-dropdown"
          text="genere"
          onClick={onClick}
          open={isOpen}
        >
          <div className="dropdown-img-container">
            <img src={polygon} alt="cannot load" />
            <GenereFilters onBlur={onBlur} dropDownRef={genereRef} />
          </div>
        </DropDownButton>

        <DropDownButton
          className="price"
          dropDownRef={priceRef}
          text="price"
          onClick={onClick}
          open={isOpen}
        >
          <div className="dropdown-img-container">
            <img src={polygon} alt="cannot load" />
            <PriceFilter onBlur={onBlur} dropDownRef={priceRef} />
          </div>
        </DropDownButton>

        <DropDownButton
          dropDownRef={sortRef}
          className="sort-direction"
          text="sort by price"
          onClick={onClick}
          open={isOpen}
        >
          <SordDirection onBlur={onBlur} dropDownRef={sortRef} />
        </DropDownButton>
      </div>
    </StyledContainer>
  );
};

export default Filters;
