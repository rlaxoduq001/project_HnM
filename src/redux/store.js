import authenticateReducer from "./reducers/authenticateReducer";
import productReducer from "./reducers/productReducer";

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer:{
    auth : authenticateReducer,
    product : productReducer
  }
})


// let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;