import { useTodoContext } from "../hooks/useTodoContext";

export const Counter = () => {
    const { pendingTodos, totalTodos } = useTodoContext();

    return <p>{`${pendingTodos}/${totalTodos}`} todos completed</p>;
};
