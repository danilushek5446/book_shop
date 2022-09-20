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
  sortDirection: {
    sortBy: 'price',
  },
};

type AddGenereActionType = {
  payload: GenereType[];
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleChecked: (state, action: PayloadAction<number>) => {
      const index = state.genere.findIndex((item) => {
        if (item.id === action.payload) {
          return true;
        }
        return false;
      });
      state.genere[index].checked = !state.genere[index].checked;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllGeneres.fulfilled, (state, action) => {
      state.genere = action.payload;
      state.genere.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.checked = false;
      });
    });
  },
});

export const {
  toggleChecked,
} = filterSlice.actions;

export default filterSlice.reducer;
