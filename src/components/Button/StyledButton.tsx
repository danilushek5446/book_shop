import type { FC } from 'react';
import { ButtonStyles } from './StyledButton.styles';

type PropType = {
  text: string;
  onClick: () => void;
};

const StyleButton: FC<PropType> = ({ text, onClick }) => {
  return (
    <ButtonStyles onClick={onClick}>{text}</ButtonStyles>
  );
};

export default StyleButton;
