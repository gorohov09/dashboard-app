import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: '@@filters',
    initialState: [],
    reducers: {
        addFilter: (state, action) => {
            state.push(action.payload);
        },
        removeFilter: (state, action) => {
            return state.filter(item => item !== action.payload)
        },
        clearAllFilters: (state, action) => {
            console.log(action);
            return []
        }
    }
})

export const {addFilter, removeFilter, clearAllFilters} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const selectAllFilters = (state) => state.filters;

