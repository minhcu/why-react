import { useEffect, useState } from "react";
import PostCard from "./postCard";
import { posts, type PostData } from "@/data/posts";
import type { DropdownInterface } from "@/pages/Blog";

interface PostProps {
  searchValue: string;
  selectedCategory: DropdownInterface;
  selectedAuthors: DropdownInterface;
  selectedNews: DropdownInterface;
}

const Post = ({
  searchValue,
  selectedCategory,
  selectedAuthors,
  selectedNews,
}: PostProps) => {
  const [dataPosts, setDataPosts] = useState<PostData[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostData[]>([]);

  useEffect(() => {
    setDataPosts(posts);
    setFilteredPosts(posts);
  }, []);

  useEffect(() => {
    const result = posts.filter((post) => {
      const resultFilterSearch = post.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const resultFilerCategory =
        selectedCategory.value === "All Categories" ||
        selectedCategory.value === post.categories;
      const resultFilerAuthors =
        selectedAuthors.value === "All Authors" ||
        selectedAuthors.value === post.author;
      return resultFilterSearch && resultFilerCategory && resultFilerAuthors;
    });

    let sorted = [...result];

    if (selectedNews.value === "Newest First") {
      sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (selectedNews.value === "Oldest First") {
      sorted.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    }

    setFilteredPosts(sorted);
  }, [searchValue, selectedCategory, selectedAuthors, selectedNews]);

  return (
    <>
      <p className="mb-6 text-sm text-muted-foreground">
        Showing {filteredPosts?.length} of {dataPosts.length} posts
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts?.map((post, index) => (
          <PostCard
            key={index}
            thumbnail={post.thumbnailURL}
            title={post.title}
            content={post.content}
            author={post.author}
            categories={post.categories}
            createdAt={post.createdAt}
            lastReadAt={post.lastReadAt}
          />
        ))}
      </div>
    </>
  );
};

export default Post;
