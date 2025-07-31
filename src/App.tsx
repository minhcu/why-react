import "./App.css";
import { RouterView } from "@/components/RouterView";
import { Link } from "./components/RouterLink";

export default function App() {
  return <>
    <menu>
      <nav>
        <ul className="flex gap-4">
          <Link to="/">Posts</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>
    </menu>
    <RouterView />
  </>;
}
