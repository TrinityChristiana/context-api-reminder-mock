import { TOGGLE_TODO, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      const currentTodo = action.payload;
      const todos = state.todos.map((todo) =>
        todo.id === currentTodo.id
          ? { ...currentTodo, completed: !currentTodo.completed }
          : todo
      );
      return { ...state, todos };
    default:
      return state;
  }
};
