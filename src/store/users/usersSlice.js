import { createSlice } from "@reduxjs/toolkit"




const initialState = {
    users:[],
    isLoading: false,
    error: undefined,
}


const usersSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
[getUsers.pending]:(state) => {
    state.isLoading = true;
},
[getUsers.fulfilled]:(state) => {
    state.isLoading = false;
},
[getUsers.rejected]:(state) => {
    state.isLoading = false;
}
    }
});



// export const { reducer } = usersSlice;
export default usersSlice.reducer;