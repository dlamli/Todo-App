import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const useTodoContext = () => {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error("<TodoContext> must be used within <TodoProvider>");
    }

    const {
        pendingTodos,
        todos,
        totalTodos,
        isLoading,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
    } = context;

    return {
        //Variables
        isLoading,
        pendingTodos,
        todos,
        totalTodos,
        //Methods
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
    };
};
