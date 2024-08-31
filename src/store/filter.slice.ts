import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Filters {
    name: string;
    userName: string;
    email: string;
    phone: string;
}

interface FiltersState {
    filtersData: Filters;
}

const initialState: FiltersState = {
    filtersData: {
        name: '',
        userName: '',
        email: '',
        phone: '', 
    }
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers:{
        filtersSet:(state, action:PayloadAction<Filters>) => {
            state.filtersData = action.payload;
        }
    }
});

const {actions, reducer} = filtersSlice;

export default reducer;

export { actions };

export const {filtersSet} = actions;