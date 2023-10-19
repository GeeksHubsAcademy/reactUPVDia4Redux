
import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
      criteria : ""
    },
    reducers: {
      add_criteria: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      
      
    }
    
});

export const { add_criteria } = searchSlice.actions;

export const criteriaData = (state) => state.criteria;

export default searchSlice.reducer;