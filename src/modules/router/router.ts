export interface RouteTo {
    name?: string;
    path?: string;
}
export const useRouter = () => {

    function navigate(to: string | RouteTo) {
        if (typeof to === "string") {
            window.history.pushState({}, "", to);
            window.dispatchEvent(new Event("popstate"));
        }
        else if (typeof to === "object") {
            window.history.pushState({}, "", to.path);
            window.dispatchEvent(new Event("popstate"));
        } else {
            console.error("Invalid route object");
        }
    }
    return {
        navigate
    }
}