import React, { useContext, useReducer } from "react";
import TodoContext from "./contexts/context";
import reducer from "./contexts/reducers";
import TodoList from "./components/TodoList";

function App() {
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
