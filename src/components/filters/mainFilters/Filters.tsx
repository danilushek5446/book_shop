import { useEffect, useState } from 'react';
import type { FC } from 'react';

import polygon from '../../../assets/icons/Polygon 4.png';
import DropDownButton from '../../dropDown/DropDownButton';
import GenereFilters from '../genereFilters/GenereFilters';
import PriceFilter from '../priceFilter/PriceFilter';
import SordDirection from '../sortDirection/SordDirection';
import { StyledContainer } from './Filters.styles';
import { useAppSelector } from '../../../store/hooks';

const Filters: FC = () => {
  const [isOpen, setIsOpen] = useState('');
  const filter = useAppSelector((state) => state.filter);

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
          onBlur={onBlur}
          className="genere genere-dropdown"
          text="genere"
          onClick={onClick}
          open={isOpen}
        >
          <div className="dropdown-img-container">
            <img src={polygon} alt="cannot load" />
            <GenereFilters onBlur={onBlur} />
          </div>
        </DropDownButton>

        <DropDownButton
          onBlur={onBlur}
          className="price"
          text="price"
          onClick={onClick}
          open={isOpen}
        >
          <div className="dropdown-img-container">
            <img src={polygon} alt="cannot load" />
            <PriceFilter onBlur={onBlur} />
          </div>
        </DropDownButton>

        <DropDownButton
          onBlur={onBlur}
          className="sort-direction"
          text="sort by price"
          onClick={onClick}
          open={isOpen}
        >
          <SordDirection onBlur={onBlur} />
        </DropDownButton>
      </div>
    </StyledContainer>
  );
};

export default Filters;
