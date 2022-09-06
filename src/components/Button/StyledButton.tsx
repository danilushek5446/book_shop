import type { FC } from 'react';
import { ButtonStyles } from './StyledButton.styles';

type PropType = {
  content: string;
};

const StyleButton: FC<PropType> = ({ content }) => {
  return (
    <ButtonStyles>{content}</ButtonStyles>
  );
};

export default StyleButton;
