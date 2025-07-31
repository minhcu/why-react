export interface RouteTo {
    name?: string;
    path?: string;
}

interface Route {
    path: string;
    name?: string;
    component?: React.ComponentType<any>;
    params?: { [key: string]: string };
    queries?: { [key: string]: string };
    children?: { [key: string]: Route };
}

export const useRouter = () => {
    const routes: { [key: string]: Route } = {};

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
        routes,
        navigate
    }
}