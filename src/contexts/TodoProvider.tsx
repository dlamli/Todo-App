import { useEffect, useState } from "react";
import { Todo, TodoProviderProps } from "../lib/types";
// import { initialTodos } from "../constants/variables";
import { TodoContext } from "./TodoContext";
import { LOCAL_TODOS } from "../constants/variables";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
// import { TODO_API_URL } from "../api/api";

export const TodoProvider = ({ children }: TodoProviderProps) => {
    //State
    const [todos, setTodos] = useState<Todo[]>(
        LOCAL_TODOS ? JSON.parse(LOCAL_TODOS) : []
    );
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { isAuthenticated } = useKindeAuth();

    //Derived State
    const totalTodos = todos.length;
    const pendingTodos = todos.filter((todo) => todo.completed).length;

    //Events Handlers/Actions
    const handleAddTodo = (todoText: string) => {
        if (todoText.length <= 1) {
            alert("Please add a todo");
            return;
        } else if (todos.length >= 3 && !isAuthenticated) {
            alert("Login to add more than 3 todos");
            return;
        } else {
            setTodos((todo) => [
                ...todo,
                {
                    id: Math.floor(Math.random() * 1000),
                    text: todoText,
                    completed: false,
                },
            ]);
        }
    };
    const handleToggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo?.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        );
    };
    const handleDeleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo?.id !== id));
    };

    //Side Effects
    useEffect(() => {
        // API CALL
        // const fetchTodo = async () => {
        //     const response = await fetch(TODO_API_URL);
        //     if (!response.ok) {
        //         setIsLoading(true);
        //     }
        //     const data = await response.json();
        //     setTodos(data);
        //     setIsLoading(false);
        // };
        // fetchTodo();

        //Local storage
        // LOCAL_TODOS && setTodos(JSON.parse(LOCAL_TODOS));
        localStorage.setItem("todos", JSON.stringify(todos));
    });

    useEffect(() => {
        const sleep = async (seconds: number) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    setIsLoading(false);
                    resolve(true);
                }, seconds * 1000);
            });
        };
        sleep(1);
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider
            value={{
                //States
                todos,
                totalTodos,
                pendingTodos,
                isLoading,
                //Methods
                handleAddTodo,
                handleToggleTodo,
                handleDeleteTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
