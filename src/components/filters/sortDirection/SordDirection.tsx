/* eslint-disable no-param-reassign */
import type { FC, RefObject } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';

import { StyledContainer, StyledItemContainer } from './SordDirection.styles';
import { sortDirection } from './sortDirectionArray';

type PropType = {
  onBlur: () => void;
  dropDownRef: RefObject<HTMLDivElement>;
};

const SordDirection: FC<PropType> = ({ onBlur, dropDownRef }) => {
  const [sortDirections, setSortDirections] = useState(sortDirection);
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useSearchParams();

  const onClick = (name: string) => {
    setSortDirections((state) => {
      state.forEach((item) => {
        if (item.sortBy === name) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
      return state;
    });
    searchQuery.set('sortBy', name);
    setSearchQuery({ sortBy: name });
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

  useEffect(() => {
    const sortBy = searchQuery.get('sortBy');
    setSortDirections((state) => {
      state.forEach((item) => {
        if (item.sortBy === sortBy) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
      return state;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
