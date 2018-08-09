import { AUTH_USER, ERROR, SIGNING_IN, SIGNING_UP } from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
  signingIn: false,
  signingUp: false
};

export default function(state = INITIAL_STATE, action) {
  console.log("ACTION.TYPE IN REDUCERS", action.type);
  switch (action.type) {
    case SIGNING_IN:
      return { ...state, signingIn: true };
    case SIGNING_UP:
      return { ...state, signingUp: true };
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case ERROR:
    //   console.log("ACTION IN ERROR", action);
      return { ...state, errorMessage: action.errorMessage };
    default:
      return state;
  }
}
