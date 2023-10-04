import { createSlice } from '@reduxjs/toolkit'






export const cartSlices = createSlice({
  name: 'carts',
  initialState :{
    cartItem: [],
    showCart:null
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
    increment:(state,action)=>{
      state.cartItem.map((item) => {
        if(item.title == action.payload.title){
            item.quantity = item.quantity + 1
            
        }
    })
    },
    decrement:(state,action)=>{
      state.cartItem.map((item,index) => {
      
        if(item.title == action.payload.title){
          if(item.quantity>1){
          item.quantity = item.quantity - 1
        }else{
            state.cartItem.splice(index,1)
          }
          
      }
      
    })
    },
    removeFromCart:(state,action)=>{
          state.cartItem.map((item,index)=>{
            if(item.title == action.payload.title){
              state.cartItem.splice(index,1)
            }
    })
    },
    setShowCart:(state,action)=>{
              state.showCart = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,increment,decrement,removeFromCart,setShowCart} = cartSlices.actions

export default cartSlices.reducer