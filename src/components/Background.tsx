import { BackgroundHeading } from "./BackgroundHeading";

export const Background = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col justify-center items-center font-inter bg-[#f1d4b3] min-h-screen px-4 lg:px-auto">
            <BackgroundHeading />
            {children}
        </div>
    );
};
