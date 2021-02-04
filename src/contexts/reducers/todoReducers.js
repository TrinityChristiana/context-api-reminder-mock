import { v4 as uuidv4 } from "uuid";

const todoReducers = {
  toggleTodo: (state, action) => {
    const currentTodo = action.payload;
    const todos = state.todos.map((todo) =>
      todo.id === currentTodo.id
        ? { ...currentTodo, completed: !currentTodo.completed }
        : todo
    );
    return { ...state, todos };
  },
  addTodo: (state, action) => {
    const newTodoObj = {
      completed: false,
      name: action.payload,
      id: uuidv4(),
    };
    const newTodos = [...state.todos, newTodoObj];
    return { ...state, todos: newTodos };
  },
  deleteTodo: (state, action) => {
    const todos = [...state.todos];
    const currentTodo = action.payload;
    const currentIndex = todos.findIndex((item) => item.id === currentTodo.id);
    todos.splice(currentIndex, 1);
    return { ...state, todos };
  },
  updateTodo: (state, action) => {
    const todos = [...state.todos];
    const currentTodo = action.payload;
    const currentIndex = todos.findIndex((item) => item.id === currentTodo.id);
    todos[currentIndex] = currentTodo;
    return { ...state, todos };
  },
};

export default todoReducers;
