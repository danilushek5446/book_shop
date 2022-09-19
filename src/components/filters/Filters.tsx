import type { FC } from 'react';
import { useState } from 'react';
import DropDownButton from '../dropDown/DropDownButton';
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
        />
        <DropDownButton
          className="price"
          text="price"
          onClick={onClick}
          open={isOpen}
        />
        <DropDownButton
          className="sort-direction"
          text="sort by price"
          onClick={onClick}
          open={isOpen}
        />
      </div>
    </StyledContainer>
  );
};

export default Filters;
