import type { FC } from 'react';

import { StyledContainer } from './DropDownButton.styles';

type PropType = {
  className: string;
  text: string;
  onClick: (className: string) => void;
  open: string;
  children: JSX.Element;
};

const DropDownButton: FC<PropType> = ({ className, text, onClick, open, children }) => {
  return (
    <StyledContainer className="dropdown">
      <div className="dropdown-container" onClick={() => onClick(className)}>
        <div className={className}>{text}</div>
        <span className={open === className ? 'open' : ''}>❯</span>
      </div>
      {(open === className)
        ? (
          children
      // eslint-disable-next-line react/jsx-no-useless-fragment
        ) : <></>}
    </StyledContainer>
  );
};

export default DropDownButton;
