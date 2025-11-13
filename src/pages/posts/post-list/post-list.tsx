import { type PostData } from "../shared/data/posts.data.ts";
import { PostCard } from "../post-list/post-detail-card.tsx";
import { memo } from "react";

export const PostList = memo(
    ({
        posts = [],
        totalPosts = 0,
    }: {
        posts: PostData[];
        totalPosts: number;
    }) => {
        return (
            <>
                <p className="mb-6 text-sm text-muted-foreground">
                    Showing {posts.length} of {totalPosts} posts
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
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
    },
    (prevProps, nextProps) => {
        return (
            prevProps.posts === nextProps.posts &&
            prevProps.totalPosts === nextProps.totalPosts
        );
    }
);
