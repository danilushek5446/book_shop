import type { FC, RefObject } from 'react';

import { StyledContainer } from './DropDownButton.styles';

type PropType = {
  className: string;
  text: string;
  onClick: (className: string) => void;
  open: string;
  children: JSX.Element;
  dropDownRef: RefObject<HTMLDivElement>;
};

const DropDownButton: FC<PropType> = (
  { className,
    text,
    onClick,
    open,
    children,
    dropDownRef,
  },
) => {
  return (
    <StyledContainer ref={dropDownRef} className="dropdown">
      <div
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
