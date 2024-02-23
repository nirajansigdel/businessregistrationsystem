import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userData: []
}

const propsSlice = createSlice({
    name: 'propsSlice',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.userData = action.payload
            // Object.assign(state, action.payload);
        },
    },
});


export const { addData } = propsSlice.actions;
export default propsSlice.reducer;