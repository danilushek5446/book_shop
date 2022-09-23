import type { FC } from 'react';

import { toggleCheckedSortDirection } from '../../../store/filter/filterSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import { StyledContainer, StyledItemContainer } from './SordDirection.styles';

type PropType = {
  onBlur: () => void;
};

const SordDirection: FC<PropType> = ({ onBlur }) => {
  const sortDirections = useAppSelector((state) => state.filter.sortDirection);
  const dispatch = useAppDispatch();
  const onClick = (name: string) => {
    dispatch(toggleCheckedSortDirection(name));
  };

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
