import { Icon } from "lucide-react";

export const Button = ({
    children,
    size = "medium",
    icon,
    iconPosition = "left",
}: {
    icon?: string;
    iconPosition?: "left" | "right";
    size?: "small" | "medium" | "large";
    children: React.ReactNode;
}) => {
    const classNames =
        "bg-primary text-white rounded-lg px-4 py-2 font-semibold transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 " +
        (size === "small"
            ? "text-sm"
            : size === "large"
                ? "text-lg"
                : "text-base");

    return <>
        <button className={classNames}>
            {icon && (iconPosition === 'left') && <Icon name={icon} iconNode={[]} />}
            {children}
            {icon && (iconPosition === 'right') && <Icon name={icon} iconNode={[]} />}
        </button>
    </>
}