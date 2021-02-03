import { TOGGLE_TODO, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};
