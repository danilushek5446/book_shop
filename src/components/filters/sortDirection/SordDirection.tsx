import type { FC } from 'react';

import { toggleCheckedSortDirection } from '../../../store/filter/filterSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import { StyledContainer, StyledItemContainer } from './SordDirection.styles';

const SordDirection: FC = () => {
  const sortDirections = useAppSelector((state) => state.filter.sortDirection);
  const dispatch = useAppDispatch();
  const onClick = (id: number) => {
    dispatch(toggleCheckedSortDirection(id));
  };

  return (
    <StyledContainer className="drop-down-list">
      <div className="drop-down-items-container">
        {sortDirections.map((item) => {
          return (
            <StyledItemContainer isChecked={item.checked} key={item.id} className="drop-down-item">
              <span onClick={() => onClick(item.id)}>{item.sortBy}</span>
            </StyledItemContainer>
          );
        })}
      </div>
    </StyledContainer >
  );
};

export default SordDirection;
