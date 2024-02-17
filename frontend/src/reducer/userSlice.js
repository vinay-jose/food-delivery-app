import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
    totalAmount: 0,
    userToken: "",
    userName: ""
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
    },
    loginUser: (state, action) => {
      const { payload } = action
      state.userToken = payload.token
      state.userName = payload.name
    },
    logoutUser: state => {
      state.userToken = ""
      state.userName = ""
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearCart, loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer