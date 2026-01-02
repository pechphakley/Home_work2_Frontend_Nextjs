import PostCardShadcd from "./PostCardShadcd";
import { PostResponse } from "@/app/lib/PostCardType";
import { loadPost } from "@/app/lib/data/fetchPost";
export default async function PostCardList() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { cache: "no-store" }
  );

  const posts: PostResponse[] = await res.json();

  /* this is another way to fetch data from fetchPost.ts file */
  // const posts: PostResponse[] = await loadPost();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
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
