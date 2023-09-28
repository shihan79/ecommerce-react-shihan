import { createSlice } from '@reduxjs/toolkit'






export const cartSlices = createSlice({
  name: 'carts',
  initialState :{
    cartItem: []
  },
  reducers: {
    addToCart: (state,action) => {
      if(state.cartItem.length>0){
        let arr = []
        state.cartItem.map((item) => {
            if(item.title == action.payload.title){
                item.quantity = item.quantity + 1
                arr.push(item.title)
            }
        })
        if(arr.indexOf(action.payload.title) == -1){
            state.cartItem.push(action.payload)
        }
      }else{
        state.cartItem.push(action.payload)
      }
    
         
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlices.actions

export default cartSlices.reducer