import "@fontsource-variable/inter"; // Supports weights 100-900
import "../src/styles/index.css";
import { TodoLayout } from "./layout/TodoLayout";
import { Background, Footer, Header, SideBar, TodoList } from "./components";


export const TodoApp = () => {
    return (
        <>
            <Background>
                <TodoLayout>
                    <Header />
                    <TodoList />
                    <SideBar />
                </TodoLayout>
                <Footer />
            </Background>
        </>
    );
};
