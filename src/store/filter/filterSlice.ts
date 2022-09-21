/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { FilterInitialType, GenereType } from '../../types/types';
import { getAllGeneres } from './filterThunk';

export const initialState: FilterInitialType = {
  genere: [],
  price: {
    minPrice: 0,
    maxPrice: 100,
  },
  sortDirection: [
    {
      id: 1,
      sortBy: 'Price',
      checked: false,
    },
    {
      id: 2,
      sortBy: 'Name',
      checked: false,
    },
    {
      id: 3,
      sortBy: 'Author name',
      checked: false,
    },
    {
      id: 4,
      sortBy: 'Rating',
      checked: false,
    },
    {
      id: 5,
      sortBy: 'Date of issue',
      checked: false,
    },
  ],
};

type AddGenereActionType = {
  payload: GenereType[];
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleCheckedGenere: (state, action: PayloadAction<number>) => {
      const index = state.genere.findIndex((item) => {
        if (item.id === action.payload) {
          return true;
        }
        return false;
      });
      state.genere[index].checked = !state.genere[index].checked;
    },
    toggleCheckedSortDirection: (state, action: PayloadAction<number>) => {
      state.sortDirection.forEach((item) => {
        if (item.id === action.payload) {
          item.checked = !item.checked;
        } else {
          item.checked = false;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllGeneres.fulfilled, (state, action) => {
      state.genere = action.payload;
      state.genere.forEach((item) => {
        item.checked = false;
      });
    });
  },
});

export const {
  toggleCheckedGenere,
  toggleCheckedSortDirection,
} = filterSlice.actions;

export default filterSlice.reducer;
