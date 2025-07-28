import { PostsPage } from "@/pages/posts/PostsPage";
import { AboutPage } from "@/pages/about/AboutPage";
import { useState } from "react";
import { PostPage } from "@/pages/post/PostPage";

const routes = [
    { path: "/", component: PostsPage },
    { path: "/about", component: AboutPage },
    { path: "/post/:id", component: PostPage },
]

const root: {
    [key: string]: {
        [key: string]: any;
        component?: React.ComponentType<any>;
    };
} = {}

for (const route of routes) {
    const levels = route.path.split("/").filter(Boolean);
    if (levels.length === 0) {
        root['index'] = {
            component: route.component
        }
    }
    else {
        let current = root;
        for (const level of levels) {
            if (!current[level]) {
                current[level] = {};
            }
            current = current[level];
        }
        current['component'] = route.component;
    }
}

export const RouterView = () => {
    const currentPath = window.location.pathname;

    const [route, setRoute] = useState(routes.find(r => r.path === currentPath));

    window.addEventListener("popstate", () => {
        const newPath = window.location.pathname;
        const newRoute = routes.find(r => r.path === newPath);
        if (newRoute)
            setRoute(newRoute);
    })

    if (route && route.component) {
        const Component = route.component;
        return <Component />;
    }
}