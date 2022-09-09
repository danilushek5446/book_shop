import type { FC } from 'react';
import { ButtonStyles } from './StyledButton.styles';

type PropType = {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
  className: string;
};

const StyleButton: FC<PropType> = ({ text, onClick, type, className }) => {
  return (
    <ButtonStyles className={className} type={type} onClick={onClick}>{text}</ButtonStyles>
  );
};

export default StyleButton;
