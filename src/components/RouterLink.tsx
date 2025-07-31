import { useRouter } from "@/modules/router/router";

export const Link = ({ to, children }: {
    to: string;
    children: React.ReactNode;
}) => {
    if (!to) {
        console.error("Link 'to' prop is required");
        return null;
    }
    const { navigate } = useRouter();
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        navigate(to);
    };

    return (
        <a className="text-blue-500" href={to} onClick={handleClick}>
            {children}
        </a>
    );
}