import { createSlice } from "@reduxjs/toolkit";

const moiveslice = createSlice({
    name:"moives",
    initialState:{
        nowplayingmoives: null,
        trailervideo:null,
        nowpopularmoive:null,
        nowtopratedmoive:null,
        nowupcomingmoive:null,
    },
    reducers: {
        addnowplayingmoives: (state, action) =>{
            state.nowplayingmoives=action.payload;
        },
        addpopularmoive:(state,action) =>{
          state.nowpopularmoive = action.payload;
        },
        addtopratedmoive: (state,action) =>{
           state.nowtopratedmoive = action.payload;
        },
        addupcomingmoive:(state,action) =>{
            state.nowupcomingmoive = action.payload;
        },
        addtrailervideo: (state,action) => {
           state.trailervideo = action.payload;
        }
    }
})
 export const {addnowplayingmoives,addtrailervideo,addpopularmoive,addtopratedmoive,addupcomingmoive} = moiveslice.actions;

export default moiveslice.reducer