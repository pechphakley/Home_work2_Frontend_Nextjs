import { PostCardType as PostCardProps, PostCardType } from "@/app/lib/PostCardType";
import { loadPost } from "@/app/lib/data/fetchPost";
import PostCard from "./PostCard";

export default async function PostCardList() {
  const posts: PostCardType[] = await loadPost();

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          userId={post.userId}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}
