import { createSlice } from "@reduxjs/toolkit";

const moiveslice = createSlice({
    name:"moives",
    initialState:{
        nowplayingmoives: null,
        trailervideo:null,
    },
    reducers: {
        addnowplayingmoives: (state, action) =>{
            state.nowplayingmoives=action.payload;
        },
        addtrailervideo: (state,action) => {
           state.trailervideo = action.payload;
        }
    }
})
 export const {addnowplayingmoives,addtrailervideo} = moiveslice.actions;

export default moiveslice.reducer