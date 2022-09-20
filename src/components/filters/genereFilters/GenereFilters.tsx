import type { FC } from 'react';

import { toggleChecked } from '../../../store/filter/filterSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import { StyledContainer } from './GenereFilters.styles';

const GenereFilters: FC = () => {
  const generes = useAppSelector((state) => state.filter.genere);
  const dispatch = useAppDispatch();
  const onClick = (id: number) => {
    const index = generes.findIndex((item) => {
      if (item.id === id) {
        return true;
      }
      return false;
    });
    dispatch(toggleChecked(id));
  };

  return (
    <StyledContainer className="drop-down-list">
      <div className="drop-down-items-container">
        {generes.map((item) => {
          return (
            <div key={item.id} className="drop-down-item">
              <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onClick(item.id)}
              id={`${item.id}`}
              />
              <label htmlFor={`${item.id}`} />
              <span>{item.name}</span>
            </div>
          );
        })
        }
      </div>
    </StyledContainer >
  );
};

export default GenereFilters;
