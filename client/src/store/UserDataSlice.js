import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name:"",
    email:"",
    message:""
}

const userDataSlice = createSlice({
name:"userData",
initialState,
reducers:{
    updateName:((state,action)=>{
        state.name = action?.payload;
    }),
    updateEmail:((state,action)=>{
        state.email = action?.payload;
    }),
    updateMessage : ((state,action)=>{
        state.message = action?.payload;
    }),
    updateAll:((state,action)=>{
        return action?.payload
    })

}
});
export const {updateAll,updateEmail,updateMessage,updateName} = userDataSlice.actions;
export default userDataSlice.reducer;