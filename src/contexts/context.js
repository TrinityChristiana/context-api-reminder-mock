import { createContext } from "react";

export default createContext({
  todos: [
    { id: 2, name: "Scroll on TikTok", completed: true },
    { id: 1, name: "Breathe", completed: false },
    { id: 3, name: "Wibbly Wobbly, Timey Whimey, Stuff", completed: false },
  ],
});
