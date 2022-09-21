import type { FC } from 'react';
import { useState } from 'react';

import polygon from '../../../assets/icons/Polygon 4.png';
import DropDownButton from '../../dropDown/DropDownButton';
import GenereFilters from '../genereFilters/GenereFilters';
import PriceFilter from '../priceFilter/PriceFilter';
import SordDirection from '../sortDirection/SordDirection';
import { StyledContainer } from './Filters.styles';

const Filters: FC = () => {
  const [isOpen, setIsOpen] = useState('');

  const onClick = (className: string) => {
    if (isOpen !== className) {
      setIsOpen(className);
    } else {
      setIsOpen('');
    }
  };
  return (
    <StyledContainer className="filters">
      <h2>Catalog</h2>
      <div className="container">
        <DropDownButton
          className="genere"
          text="genere"
          onClick={onClick}
          open={isOpen}
        >
          <div className="dropdown-img-container">
            <img src={polygon} alt="cannot load" />
            <GenereFilters />
          </div>
        </DropDownButton>

        <DropDownButton
          className="price"
          text="price"
          onClick={onClick}
          open={isOpen}
        >
          <div className="dropdown-img-container">
            <img src={polygon} alt="cannot load" />
            <PriceFilter />
          </div>
        </DropDownButton>

        <DropDownButton
          className="sort-direction"
          text="sort by price"
          onClick={onClick}
          open={isOpen}
        >
          <SordDirection />
        </DropDownButton>
      </div>
    </StyledContainer>
  );
};

export default Filters;
