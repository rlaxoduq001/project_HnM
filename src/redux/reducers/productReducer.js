import { createSlice } from "@reduxjs/toolkit";


let initialState = {
  productList: []
  // selectedItem: null
}

// 리덕스 툴킷
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProduct(state, action) {
      state.productList = action.payload;
    },
    getSingleProduct(state, action) {
      state.selectedItem = action.payload;
    }
  }
}) 

export const productActions = productSlice.actions;
export default productSlice.reducer;


// function productReducer(state=initialState,action) {

//   switch (action.type) {
//     case "GET_PRODUCT_SUCCESS":
//       return {
//         ...state,
//         productList: action.payload.data
//       }
//     case "GET_SINGLE_PRODUCT_SUCCESS":
//       return { 
//         ...state, 
//         selectedItem: action.payload.data 
//       };
//     default: 
//       return {
//         ...state
//       }
//   }

// }

// export default productReducer;