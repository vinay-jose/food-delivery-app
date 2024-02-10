import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
    totalAmount: 0
  },
  reducers: {
    addItem: (state, action) => {
      const { payload } = action
      let items = [...state.items];
      let index = items.findIndex(i => i.id === payload.id);
      console.log(index, payload.id)
      if (index > -1){
          items[index] = {
              ...items[index],
              quantity : items[index].quantity + 1
          }
      }
      else{
          items.push({
              ...payload,
              quantity: 1
          })
      }
      
      state.items = items
      state.totalAmount += payload.price
    },
    removeItem: (state, action) => {
      const { payload } = action
      let items = [...state.items];
      let index = items.findIndex(item => item.id === payload);
      state.totalAmount -= items[index].price

      if (items[index].quantity === 1){
          items.splice(index, 1)
      }
      else{
          // console.log(items[index].quantity)
          items[index] = {
              ...items[index],
              quantity : items[index].quantity - 1
          }
          
      }

      state.items = items
    },
    clearCart: state => {
      state.items = []
      state.totalAmount = 0
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearCart } = userSlice.actions

export default userSlice.reducer