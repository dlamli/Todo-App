import { createContext } from "react";
import { TTodosContext } from "../lib/types";

export const TodoContext = createContext<TTodosContext | null>(null);
