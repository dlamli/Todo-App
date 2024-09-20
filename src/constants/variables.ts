import { Todo } from "../lib/types";

export const INITIAL_TODOS: Todo[] = [
    {
        id: 1,
        text: "Buy Coffee",
        completed: true,
    },
    {
        id: 2,
        text: "Drink water",
        completed: false,
    },
];

//LOCAL STORAGE
export const LOCAL_TODOS = localStorage.getItem("todos");
