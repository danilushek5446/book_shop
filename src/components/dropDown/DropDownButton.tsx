import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { StyledContainer } from './DropDownButton.styles';

type PropType = {
  className: string;
  text: string;
  onClick: (className: string) => void;
  open: string;
  children: JSX.Element;
  onBlur: () => void;
};

const DropDownButton: FC<PropType> = ({ className, text, onClick, open, children, onBlur }) => {
  const ref = useRef(null);
  return (
    <StyledContainer className="dropdown">
      <div
        ref={ref}
        className={`${className} dropdown-container`} onClick={() => onClick(className)}
      >
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
