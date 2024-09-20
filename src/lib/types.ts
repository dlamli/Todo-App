type ButtonType = "primary" | "secondary" | "delete";

export type ButtonProps = {
    id?: number;
    buttonType?: ButtonType;
    children?: React.ReactNode;
    handleDeleteTodo?: (id: number | undefined) => void;
    onClick?: () => Promise<void>;
};

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export type TodoListProps = {
    todos: Todo[];
    handleToggleTodo: (id: number) => void;
    handleDeleteTodo: (id: number) => void;
};

export type TodoProviderProps = {
    children: React.ReactNode;
};

export type TTodosContext = {
    isLoading: boolean;
    pendingTodos: number;
    todos: Todo[];
    totalTodos: number;
    handleAddTodo: (todoText: string) => void;
    handleToggleTodo: (id: number) => void;
    handleDeleteTodo: (id: number) => void;
};
