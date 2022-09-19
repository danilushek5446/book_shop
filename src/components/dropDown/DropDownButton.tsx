import type { FC } from 'react';

import { StyledContainer } from './DropDownButton.styles';

type PropType = {
  className: string;
  text: string;
  onClick: (className: string) => void;
  open: string;
};

const DropDownButton: FC<PropType> = ({ className, text, onClick, open }) => {
  return (
    <StyledContainer className="dropdown">
      <div className="dropdown-container" onClick={() => onClick(className)}>
        <div className={className}>{text}</div>
        <span>❯</span>
      </div>
      {(open === className)
        ? (<div className={`drop-down-list ${(open === className) ? 'open' : ''} ${className}`}>
          <div className="drop-down-items-container">
            <div className="drop-down-item">
              <input type="checkbox" />
              <span>Fiction</span>
            </div>
          </div>
           </div>
        // eslint-disable-next-line react/jsx-no-useless-fragment
        ) : <></>}
    </StyledContainer>
  );
};

export default DropDownButton;
