import Link from "next/link";
import PostCardShadcd from "@/components/card/PostCardShadcd";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function loadPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function BlogListPage() {
  const posts = await loadPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <PostCardShadcd
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        </Link>
      ))}
    </div>
  );
}
