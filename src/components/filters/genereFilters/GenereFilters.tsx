import type { FC } from 'react';
import { useRef, useEffect } from 'react';

import { toggleCheckedGenere } from '../../../store/filter/filterSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import { StyledContainer } from './GenereFilters.styles';

type PropType = {
  onBlur: () => void;
};

const GenereFilters: FC<PropType> = ({ onBlur }) => {
  const generes = useAppSelector((state) => state.filter.genere);

  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const onClick = (id: number) => {
    dispatch(toggleCheckedGenere(id));
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const closeDropdown = (e: any) => {
      // eslint-disable-next-line no-console
      console.log(e.target.className.includes('genere-dropdown'));
      if (!e.target.className.includes('genere-dropdown')) {
        onBlur();
      }
    };

    document.body.addEventListener('click', closeDropdown);

    return () => document.body.removeEventListener('click', closeDropdown);
  });

  return (
    <StyledContainer ref={ref} className="drop-down-list genere-dropdown">
      <div ref={ref} className="drop-down-items-container genere-dropdown">
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
