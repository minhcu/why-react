import { useEffect, useState } from "react";
import { posts, type PostData } from "../shared/data/posts.data.ts";
import type { DropdownOption } from "../PostsPage.tsx";
import {PostCard} from "../post-list/post-detail-card.tsx";

interface PostListProps {
  searchValue: string;
  selectedCategory: DropdownOption;
  selectedAuthors: DropdownOption;
  selectedNews: DropdownOption;
}

export const PostList = ({
  searchValue,
  selectedCategory,
  selectedAuthors,
  selectedNews,
}: PostListProps) => {
  const [dataPosts, setDataPosts] = useState<PostData[]>([]);

  function filterPosts() {
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

    if (selectedNews.value === "Newest First") {
      result.sort(
          (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (selectedNews.value === "Oldest First") {
      result.sort(
          (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    }
    return result;
  }

  const filteredPosts = filterPosts();

  useEffect(() => {
    setDataPosts(posts);
  }, []);

  return (
    <>
      <p className="mb-6 text-sm text-muted-foreground">
        Showing {filteredPosts?.length} of {dataPosts.length} posts
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
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
