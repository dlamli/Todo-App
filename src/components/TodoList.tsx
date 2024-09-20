import { Button } from "./Button";
import { useTodoContext } from "../hooks/useTodoContext";
import { LoadingSpinner } from "./LoadingSpinner";

export const TodoList = () => {
    const { todos, isLoading, handleToggleTodo } = useTodoContext();

    return (
        <ul>
            {isLoading && (
                <li className="flex justify-center items-center h-full">
                    <LoadingSpinner />
                </li>
            )}
            {todos.length === 0 && (
                <li className="flex flex-col justify-center items-center font-semibold h-full font-inter text-[#473a2b] text-[24px]">
                    <div className="px-4 lg:px-auto">
                        <span>Start by adding a todo</span>
                        <span>📝</span>
                    </div>
                </li>
            )}
            {todos.map(({ id, text, completed }) => (
                <li
                    key={id}
                    className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[0.08]"
                    onClick={() => handleToggleTodo(id)}
                >
                    <span
                        className={`${completed && "line-through text-[#ccc]"}`}
                    >
                        {text}
                    </span>
                    <Button buttonType="delete" id={id} />
                </li>
            ))}
        </ul>
    );
};
