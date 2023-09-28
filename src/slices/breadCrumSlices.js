import { createSlice } from '@reduxjs/toolkit'




// const initialState = {
//   previousName: '',
//   currentName: ''
// }

export const breadCrumSlices = createSlice({
  name: 'breadCrumSlices',
  initialState :{
    currentName: 'Home',
    previousName : ''
  },
  reducers: {
    pageName: (state,action) => {
      state.previousName = state.currentName
      state.currentName = action.payload
         
         
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { pageName } = breadCrumSlices.actions

export default breadCrumSlices.reducer