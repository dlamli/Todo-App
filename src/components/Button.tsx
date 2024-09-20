import { useTodoContext } from "../hooks/useTodoContext";
import { ButtonProps } from "../lib/types";

export const Button = ({ buttonType, children, id, onClick }: ButtonProps) => {
    const { handleDeleteTodo } = useTodoContext();
    return buttonType === "delete" ? (
        <button
            onClick={(e) => {
                e.stopPropagation();
                handleDeleteTodo(id!);
            }}
        >
            ❌
        </button>
    ) : (
        <button onClick={onClick}
            className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer ${
                buttonType === "secondary" ? "opacity-[85%]" : ""
            }`}
        >
            {children}
        </button>
    );
};
