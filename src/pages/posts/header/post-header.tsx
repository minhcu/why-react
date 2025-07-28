import {AddNewPost} from "./add-new-post.tsx";

export const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-start">
          Blog Posts
        </h1>
        <p className="text-muted-foreground mt-2 text">
          Discover insights, tutorials, and updates from our team
        </p>
      </div>
      <AddNewPost />
    </div>
  );
};
