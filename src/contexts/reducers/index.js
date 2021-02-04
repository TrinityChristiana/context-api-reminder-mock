import { TOGGLE_TODO, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../constants";
import todoReducder from "./todoReducers";
const mainReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return todoReducder.toggleTodo(state, action);
    case ADD_TODO:
      return todoReducder.addTodo(state, action);
    case DELETE_TODO:
      return todoReducder.deleteTodo(state, action);
    case UPDATE_TODO:
      return todoReducder.updateTodo(state, action);
    default:
      return state;
  }
};
export default mainReducer;
