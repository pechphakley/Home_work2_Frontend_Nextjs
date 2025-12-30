import PostCardShadcd from "./PostCardShadcd";
import { PostResponse } from "@/app/lib/PostCardType";

export default async function PostCardList() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { cache: "no-store" }
  );

  const posts: PostResponse[] = await res.json();

  return (
    <div className="grid gap-4 ">
      {posts.map((post) => (
        <PostCardShadcd
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
