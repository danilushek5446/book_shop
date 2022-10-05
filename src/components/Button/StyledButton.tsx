import type { FC } from 'react';

import { ButtonStyles } from './StyledButton.styles';

type PropType = {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const StyleButton: FC<PropType> = ({ text, onClick, type, className, disabled }) => {
  return (
    <ButtonStyles
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </ButtonStyles>
  );
};

export default StyleButton;
