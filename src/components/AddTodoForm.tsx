import React, { useState } from "react";
import { Button } from "./Button";
import { useTodoContext } from "../hooks/useTodoContext";

export const AddTodoForm = () => {
    const [todoText, setTodoText] = useState("");
    const { handleAddTodo } = useTodoContext();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleAddTodo(todoText);
        setTodoText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="font-medium text-[#231d15]">Add a todo</h2>
            <input
                type="text"
                className="h-[45px] border border-black/[12%] rounded-[5px] text-[14px] block w-full px-[16px] my-[9px]"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <Button buttonType="primary">Add to List</Button>
        </form>
    );
};
