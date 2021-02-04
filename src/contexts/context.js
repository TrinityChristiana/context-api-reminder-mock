import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

export default createContext({
  todos: [
    { id: uuidv4(), name: "Scroll on TikTok", completed: true },
    { id: uuidv4(), name: "Breathe", completed: false },
    { id: uuidv4(), name: "Wibbly Wobbly, Timey Whimey, Stuff", completed: false },
  ],
  todoTitle: "Today",
});
