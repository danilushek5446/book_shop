import type { FC, RefObject } from 'react';
import { useEffect } from 'react';

import { toggleCheckedSortDirection } from '../../../store/filter/filterSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import { StyledContainer, StyledItemContainer } from './SordDirection.styles';

type PropType = {
  onBlur: () => void;
  dropDownRef: RefObject<HTMLDivElement>;
};

const SordDirection: FC<PropType> = ({ onBlur, dropDownRef }) => {
  const sortDirections = useAppSelector((state) => state.filter.sortDirection);
  const dispatch = useAppDispatch();
  const onClick = (name: string) => {
    dispatch(toggleCheckedSortDirection(name));
  };

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (!dropDownRef.current) {
        return;
      }
      if (!dropDownRef.current.contains(e.target as Node)) {
        onBlur();
      }
    };

    document.body.addEventListener('click', closeDropdown);

    return () => document.body.removeEventListener('click', closeDropdown);
  });

  return (
    <StyledContainer className="drop-down-list">
      <div className="drop-down-items-container">
        {sortDirections.map((item) => {
          return (
            <StyledItemContainer isChecked={item.checked} key={item.id} className="drop-down-item">
              <span onClick={() => onClick(item.sortBy)}>{item.sortBy}</span>
            </StyledItemContainer>
          );
        })}
      </div>
    </StyledContainer >
  );
};

export default SordDirection;
