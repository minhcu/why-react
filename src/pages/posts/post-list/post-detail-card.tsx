import { CalendarDays, UserIcon } from "lucide-react";

interface PostCard {
  title: string;
  content: string;
  author: string;
  thumbnail: string;
  categories: string;
  createdAt: string;
  lastReadAt: string;
}

export const PostCard = (props: PostCard) => {
  function formatTimeAgo(dateString: string): string {
    const diffMs = Date.now() - new Date(dateString).getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMinutes < 60) {
      return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} read`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? "s" : ""} read`;
    } else {
      return `${diffDays} day${diffDays !== 1 ? "s" : ""} read`;
    }
  }
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <div className="aspect-video relative overflow-hidden">
        <img src={props.thumbnail} alt="image" />
      </div>
      <div className="card-header @container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90">
            {props.categories}
          </span>
          <span className="text-xs text-muted-foreground">
            {formatTimeAgo(props.lastReadAt)}
          </span>
        </div>
        <div className="font-semibold text-lg leading-tight hover:text-primary transition-colors">
          {props.title}
        </div>
        <div className="card-content">
          <div className="text-muted-foreground text-sm line-clamp-3 mb-4">
            {props.content}
          </div>
        </div>
        <div className="card-footer flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <UserIcon size={12} /> {props.author}
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays size={12} />
            {props.createdAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
