import type { FC, RefObject } from 'react';
import { useEffect, useRef } from 'react';

import { toggleCheckedGenere } from '../../../store/filter/filterSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { StyledContainer } from './GenereFilters.styles';

type PropType = {
  onBlur: () => void;
  dropDownRef: RefObject<HTMLDivElement>;
};

const GenereFilters: FC<PropType> = ({ onBlur, dropDownRef }) => {
  const generes = useAppSelector((state) => state.filter.genere);

  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const onClick = (id: number) => {
    dispatch(toggleCheckedGenere(id));
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
    <StyledContainer ref={ref} className="drop-down-list genere-dropdown">
      <div className="drop-down-items-container genere-dropdown">
        {generes.map((item) => {
          return (
            <div key={item.id} className="drop-down-item genere-dropdown">
              <input
                className="dropdown-input genere-dropdown"
                type="checkbox"
                checked={item.checked}
                onChange={() => onClick(item.id)}
                id={`${item.id}`}
              />
              <label className="genere-dropdown" htmlFor={`${item.id}`} />
              <span className="dropdown-item-name genere-dropdown">{item.name}</span>
            </div>
          );
        })
        }
      </div>
    </StyledContainer >
  );
};

export default GenereFilters;
