import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
    },
    reducers: {
      /*increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
      },*/
      addProduct(state, action){
        state.products.push({
            id: new Date().toISOString(),
            namePr: action.payload.namePr,
            price: action.payload.price,
            isEdit: false,

        })
      },
      delProduct(state, action){
        state.products = state.products.filter(product => product.id !== action.payload.id);
      },
      editProduct: (state, action) => {
        const index = state.products.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.products[index].price = action.payload.price;
          state.products[index].namePr = action.payload.namePr;
        }
      },
      toggleIsEdit(state, action){        
        const prod = state.products.find(product => product.id === action.payload.id);
        prod.isEdit = !prod.isEdit;

      },
    },
  })
  
  export const { addProduct, delProduct, editProduct, toggleIsEdit } = productSlice.actions;
  
  export default productSlice.reducer;