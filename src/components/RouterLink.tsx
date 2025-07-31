export const Link = ({ to, children }: {
    to: string;
    children: React.ReactNode;
}) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        window.history.pushState({}, "", to);
        window.dispatchEvent(new Event("popstate"));
    };

    return (
        <a className="text-blue-500" href={to} onClick={handleClick}>
            {children}
        </a>
    );
}