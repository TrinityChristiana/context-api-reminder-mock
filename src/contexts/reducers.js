import { TOGGLE_TODO, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";

const toggleTodo = (state, action) => {
  const currentTodo = action.payload;
  const todos = state.todos.map((todo) =>
    todo.id === currentTodo.id
      ? { ...currentTodo, completed: !currentTodo.completed }
      : todo
  );
  return { ...state, todos };
};

const addTodo = (state, action) => {
  const newTodos = [...state.todos, action.payload];
  return { ...state, todos: newTodos };
};

const deleteTodo = (state, action) => {
  const todos = [...state.todos];
  const currentTodo = action.payload;
  const currentIndex = todos.findIndex((item) => item.id === currentTodo.id);
  todos.splice(currentIndex, 1);
  return { ...state, todos };
};

const updateTodo = (state, action) => {
  return state;
};

export default function (state, action) {
  switch (action.type) {
    case TOGGLE_TODO:
      return toggleTodo(state, action);
    case ADD_TODO:
      return addTodo(state, action);
    case DELETE_TODO:
      return deleteTodo(state, action);
    case UPDATE_TODO:
      return updateTodo(state, action);
    default:
      return state;
  }
}
