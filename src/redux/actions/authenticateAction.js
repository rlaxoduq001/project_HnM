import { productActions } from "../reducers/authenticateReducer";

function login(id,password) {
  return (dispatch, getState) => {
    console.log("Login action");
    dispatch(productActions.getLogin(id, password))
  };
}

export const authenticateAction = { login };