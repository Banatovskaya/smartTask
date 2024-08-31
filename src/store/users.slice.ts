import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Users } from "../interfaces";

interface UsersState {
    usersData: Users;
}

const initialState: UsersState = {
    usersData: []
};

export const usersSlice = createSlice({
    name: 'usersList',
    initialState,
    reducers:{
        allUsersSet:(state, action:PayloadAction<Users>) => {
            state.usersData = action.payload;
            console.log('11')
        }
    }
});

const {actions, reducer} = usersSlice;

export default reducer;

export { actions };

export const {allUsersSet} = actions;
