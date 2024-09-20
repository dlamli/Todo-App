import { Counter } from "./Counter";
import { Logo } from "./Logo";

export const Header = () => {
    return (
        <header className="flex justify-between items-center col-[1/3] row[1/2] bg-[#fbf5ed] border-b border-black/[0.08] px-[28px]">
            <Logo />
            <Counter />
        </header>
    );
};
