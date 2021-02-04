import React, { useContext, useReducer } from "react";
import TodoContext from "./contexts/context";
import reducer from "./contexts/reducers";
import TodoList from "./components/TodoList";
import StatusBar from "./components/StatusBar";
import TodoForm from "./components/TodoForm";

function App() {
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <StatusBar />
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoList />
        <TodoForm />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
