export const TodoLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <main className="relative w-[972px] max-w-full h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[8fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
                {children}
            </main>
        </>
    );
};
