import { useTodoContext } from "../hooks/useTodoContext";

export const Counter = () => {
    const { pendingTodos, totalTodos } = useTodoContext();

    return (
        <p className="text-[14px] text-[#473a2b]">
            {`${pendingTodos}/${totalTodos}`} todos completed
        </p>
    );
};
