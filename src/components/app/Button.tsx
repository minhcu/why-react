import { Icon } from "lucide-react";

export const Button = ({
    children,
    size = "medium",
    icon,
    iconPosition = "left",
    className = "",
    ...props
}: {
    className?: string;
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
                : "text-base") + className

    return <>
        <button className={classNames} {...props}>
            {icon && (iconPosition === 'left') && <Icon name={icon} iconNode={[]} />}
            {children}
            {icon && (iconPosition === 'right') && <Icon name={icon} iconNode={[]} />}
        </button>
    </>
}