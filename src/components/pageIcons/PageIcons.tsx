import type { FC } from 'react';

import { StyledDiv } from './PageIcons.styles';

type PropType = {
  picture: string;
  onClick?: () => void;
  count?: number;
  className: string;
};

const PageIcons: FC<PropType> = ({ picture, onClick, count, className }) => {
  return (
    <StyledDiv
      className={className}
      onClick={onClick}
      count={count || 0}
    >
      <img
        src={picture}
        id="page-icon"
        alt="cannot load picture"
      />
      <label htmlFor="page-icon">{count}</label>
    </StyledDiv>
  );
};

export default PageIcons;
