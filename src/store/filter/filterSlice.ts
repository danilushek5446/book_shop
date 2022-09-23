/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { FilterInitialType } from '../../types/types';
import { getAllGeneres } from './filterThunk';

export const initialState: FilterInitialType = {
  page: 0,
  search: '',
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
      checked: true,
    },
    {
      id: 5,
      sortBy: 'Date of issue',
      checked: false,
    },
  ],
};

type PricePayloadType = {
  minPrice: number;
  maxPrice: number;
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
    toggleCheckedSortDirection: (state, action: PayloadAction<string>) => {
      state.sortDirection.forEach((item) => {
        if (item.sortBy === action.payload) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
    },
    setPrice: (state, action: PayloadAction<PricePayloadType>) => {
      state.price.maxPrice = action.payload.maxPrice;
      state.price.minPrice = action.payload.minPrice;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
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
  setPrice,
  setPage,
  setSearch,
} = filterSlice.actions;

export default filterSlice.reducer;
