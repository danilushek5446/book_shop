import type { FC } from 'react';
import { StyledContainer } from './Filters.styles';

const Filters: FC = () => {
  return (
    <StyledContainer className="filters">
      <h2>Catalog</h2>
      <div className="container">
        <div className="dropdown-container">
          <div className="genere">genere</div>
          <span>❯</span>
        </div>
        <div className="genere-dropdown" />
        <div className="dropdown-container">
          <div className="Price">Price</div>
          <span>❯</span>
        </div>
        <div className="price-dropdown" />
        <div className="dropdown-container">
          <div className="sort-direction">sort by price</div>
          <span>❯</span>
        </div>
        <div className="sort-direction-dropdown" />
      </div>
    </StyledContainer>
  );
};

export default Filters;
