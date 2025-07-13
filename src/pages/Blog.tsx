import Filter from "@/components/filter";
import Header from "@/components/header";
import Post from "@/components/posts";
import { useEffect, useState } from "react";
import { type PostData, posts } from "@/data/posts";

export interface DropdownInterface {
  value: string;
  label: string;
}

export const Blog = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<DropdownInterface>({
    value: "All Categories",
    label: "All Categories",
  });
  const [selectedAuthors, setSelectedAuthors] = useState<DropdownInterface>({
    value: "All Authors",
    label: "All Authors",
  });
  const [selectedNews, setSelectedNews] = useState<DropdownInterface>({
    value: "Newest First",
    label: "Newest First",
  });
  const [categoryOptions, setCategoryOptions] = useState<DropdownInterface[]>(
    []
  );
  const [authorOptions, setAuthorOptions] = useState<DropdownInterface[]>([]);

  useEffect(() => {
    const getCategoryOptions = (posts: PostData[]): DropdownInterface[] => {
      const unique = Array.from(new Set(posts.map((post) => post.categories)));
      return [
        { value: "All Categories", label: "All Categories" },
        ...unique.map((cat) => ({ value: cat, label: cat })),
      ];
    };

    const getAuthorOptions = (posts: PostData[]): DropdownInterface[] => {
      const unique = Array.from(new Set(posts.map((post) => post.author)));
      return [
        { value: "All Authors", label: "All Authors" },
        ...unique.map((author) => ({ value: author, label: author })),
      ];
    };

    setCategoryOptions(getCategoryOptions(posts));
    setAuthorOptions(getAuthorOptions(posts));
  }, []);

  const sortOptions: DropdownInterface[] = [
    { value: "Newest First", label: "Newest First" },
    { value: "Oldest First", label: "Oldest First" },
    { value: "Title A - Z", label: "Title A - Z" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <Filter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSelectedAuthors={setSelectedAuthors}
          setSelectedNews={setSelectedNews}
          selectedAuthors={selectedAuthors}
          selectedNews={selectedNews}
          categoryOptions={categoryOptions}
          authorOptions={authorOptions}
          sortOptions={sortOptions}
        />
        <Post
          searchValue={searchValue}
          selectedCategory={selectedCategory}
          selectedAuthors={selectedAuthors}
          selectedNews={selectedNews}
        />
      </div>
    </div>
  );
};
