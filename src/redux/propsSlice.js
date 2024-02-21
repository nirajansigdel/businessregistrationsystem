import { createSlice } from "@reduxjs/toolkit";


const initialState = {}

const propsSlice = createSlice({
    name: 'propsSlice',
    initialState,
    reducers: {
        addData: (state, action) => {
            Object.assign(state, action.payload);
        },
    },
});


export const { addData } = propsSlice.actions;
export default propsSlice.reducer;