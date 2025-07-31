import { PostsPage } from "@/pages/posts/PostsPage";
import { AboutPage } from "@/pages/about/AboutPage";
import { useState } from "react";
import { PostPage } from "@/pages/post/PostPage";

const routes = [
    { path: "/", component: PostsPage },
    { path: "/about", component: AboutPage },
    { path: "/post/:id", component: PostPage },
]

// Init root object to store routes
const root: {
    [key: string]: {
        [key: string]: any;
        component?: React.ComponentType<any>;
    };
} = {}

// Populate the root object with pre-defined routes
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

// Function to get the current route based on the URL path
function getCurrentRoute() {
    const path = window.location.pathname;
    const levels = path.split("/").filter(Boolean);
    let current = root;

    const params: { [key: string]: string } = {};
    const queries: { [key: string]: string } = {};

    for (const level of levels) {
        if (current[level]) {
            current = current[level];

            if(level.startsWith(":")) {
                // If the level starts with ":", it's a dynamic segment
                params[level] = level;
            }

        } else {
            return null; // Route not found
        }
    }

    // If the current route does not have a component, return error component with error message
    // if (!current['component']) {
    //     current['component'] = ReactErrorComponent

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams) {
        urlParams.forEach((value, key) => {
            queries[key] = value;
        });
    }
    
    current['params'] = params;
    current['queries'] = queries;
    return current;
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