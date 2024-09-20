import React from "react";
import ReactDOM from "react-dom/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { TodoApp } from "./TodoApp";
import { TodoProvider } from "./contexts/TodoProvider";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <KindeProvider
            clientId="f5fe70a21ae041058bfd80e72f932804"
            domain="https://dlamdev.kinde.com"
            // redirectUri="http://localhost:5173"
            redirectUri={
                process.env.NODE_ENV === "production"
                    ? "https://todo-app-dlam.netlify.app"
                    : "http://localhost:5173"
            }
            logoutUri={
                process.env.NODE_ENV === "production"
                    ? "https://todo-app-dlam.netlify.app"
                    : "http://localhost:5173"
            }
        >
            <TodoProvider>
                <TodoApp />
            </TodoProvider>
        </KindeProvider>
    </React.StrictMode>
);
