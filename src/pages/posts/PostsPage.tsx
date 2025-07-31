import { Filter } from "./filter/post-filter.tsx";
import { Header } from "./header/post-header.tsx";
import { PostList } from "./post-list/post-list.tsx";
import { useEffect, useMemo, useState } from "react";
import { type PostData, posts } from "./shared/data/posts.data.ts";


export interface DropdownOption {
  value: string;
  label: string;
}

const SORT_OPTIONS: DropdownOption[] = [
  { value: "Newest First", label: "Newest First" },
  { value: "Oldest First", label: "Oldest First" },
  { value: "Title A - Z", label: "Title A - Z" },
] as const;

export const PostsPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<DropdownOption>({
    value: "All Categories",
    label: "All Categories",
  });
  const [selectedAuthors, setSelectedAuthors] = useState<DropdownOption>({
    value: "All Authors",
    label: "All Authors",
  });
  const [selectedNews, setSelectedNews] = useState<DropdownOption>({
    value: "Newest First",
    label: "Newest First",
  });
  const [categoryOptions, setCategoryOptions] = useState<DropdownOption[]>(
    []
  );
  const [authorOptions, setAuthorOptions] = useState<DropdownOption[]>([]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesCategory =
        selectedCategory.value === "All Categories" ||
        selectedCategory.value === post.categories;
      const matchesAuthor =
        selectedAuthors.value === "All Authors" ||
        selectedAuthors.value === post.author;
      return matchesSearch && matchesCategory && matchesAuthor;
    }).sort((a, b) => {
      if (selectedNews.value === "Newest First") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else if (selectedNews.value === "Oldest First") {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      } else if (selectedNews.value === "Title A - Z") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [searchValue, selectedCategory, selectedAuthors, selectedNews]);

  useEffect(function loadAPI() {
    const getCategoryOptions = (posts: PostData[]): DropdownOption[] => {
      const unique = Array.from(new Set(posts.map((post) => post.categories)));
      return [
        { value: "All Categories", label: "All Categories" },
        ...unique.map((cat) => ({ value: cat, label: cat })),
      ];
    };

    const getAuthorOptions = (posts: PostData[]): DropdownOption[] => {
      const unique = Array.from(new Set(posts.map((post) => post.author)));
      return [
        { value: "All Authors", label: "All Authors" },
        ...unique.map((author) => ({ value: author, label: author })),
      ];
    };

    setCategoryOptions(getCategoryOptions(posts));
    setAuthorOptions(getAuthorOptions(posts));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <Filter
          searchValue={searchValue}
          categoryOptions={categoryOptions}
          authorOptions={authorOptions}
          sortOptions={SORT_OPTIONS}
          selectedCategory={selectedCategory}
          selectedAuthors={selectedAuthors}
          selectedNews={selectedNews}
          onSearchValueChange={setSearchValue}
          onSelectCategory={setSelectedCategory}
          onSelectAuthors={setSelectedAuthors}
          onSelectNews={setSelectedNews}
        />

        <PostList
          posts={filteredPosts}
          totalPosts={posts.length}
        />
      </div>
    </div>
  );
};
