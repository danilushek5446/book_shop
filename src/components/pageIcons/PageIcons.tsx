import type { FC } from 'react';
import { StyledDiv } from './PageIcons.styles';

type PropType = {
  picture: string;
  onClick: () => void;
};

const PageIcons: FC<PropType> = ({ picture, onClick }) => {
  return (
    <StyledDiv onClick={onClick}>
      <img src={picture} alt="cannot load picture" />
    </StyledDiv>
  );
};

export default PageIcons;
