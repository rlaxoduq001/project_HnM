import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  id:'',
  password:'',
  authenticate : false
}

const authenticateSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    getLogin(state, action) {
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.authenticate = true;
    }
  }
}) 

export const productActions = authenticateSlice.actions;
export default authenticateSlice.reducer;




// function authenticateReducer(state=initialState, action) {

//   switch(action.type) {
//     case "LOGIN_SUCCESS" : 
//       console.log("login success reducer");
//       return { 
//         ...state, 
//         id: action.payload.id,
//         password: action.payload.password,
//         authenticate: true
//       }
//     default : 
//       return { ...state };
//   }
// }

// export default authenticateReducer;