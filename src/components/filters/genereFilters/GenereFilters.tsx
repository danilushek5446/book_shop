import type { FC, RefObject } from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getGeneres } from '../../../http/generesApi';

import type { GenereType } from '../../../types/filterTypes';
import { StyledContainer } from './GenereFilters.styles';

type PropType = {
  onBlur: () => void;
  dropDownRef: RefObject<HTMLDivElement>;
};

const GenereFilters: FC<PropType> = ({ onBlur, dropDownRef }) => {
  const [generes, setGeneres] = useState<GenereType[]>();

  const [currentGeneres, setCurrentGeneres] = useState<number[]>([]);

  const [searchQuery, setSearchQuery] = useSearchParams();
  const ref = useRef<HTMLDivElement>(null);

  const onClick = async (id: number) => {
    let index = -1;

    if (generes) {
      index = generes.findIndex((item) => item.id === id);
    }

    if (generes && index >= -1) {
      if (!currentGeneres?.includes(generes[index].id)) {
        setCurrentGeneres((state) => {
          state.push(generes[index].id);
          return state;
        });

        searchQuery.set('genere', [...currentGeneres, generes[index].id].toString() || '');

        setSearchQuery(searchQuery);

        return;
      }
      let currentIndex = -1;

      if (currentGeneres) {
        currentIndex = currentGeneres?.findIndex((item) => item === generes[index].id);
      }

      const queryGeneres = currentGeneres.map((item) => item);
      queryGeneres.splice(currentIndex, 1);

      setCurrentGeneres((state) => {
        if (currentIndex !== -1) {
          state?.splice(currentIndex, 1);
        }
        return state;
      });

      searchQuery.set('genere', queryGeneres.toString() || '');
    }

    setSearchQuery(searchQuery);
  };

  useEffect(() => {
    (async () => {
      const generesArray = await getGeneres();
      setGeneres(() => {
        return generesArray;
      });
    })();

    const queryGenere = searchQuery.getAll('genere').join(',').split(',');

    setCurrentGeneres((state) => {
      queryGenere.forEach((item) => {
        if (+item) {
          state.push(+item);
        }
      });

      return state;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer ref={ref} className="drop-down-list genere-dropdown">
      <div className="drop-down-items-container genere-dropdown">
        {generes?.map((item) => {
          return (
            <div key={item.id} className="drop-down-item genere-dropdown">
              <input
                className="dropdown-input genere-dropdown"
                type="checkbox"
                checked={currentGeneres?.includes(item.id)}
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
