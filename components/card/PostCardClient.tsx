"use client";

import Link from "next/link";
import PostCardShadcd from "@/components/card/PostCardShadcd";
import { PostResponse } from "@/app/lib/PostCardType";

type Props = {
  posts: PostResponse[];
};

export default function PostCardClient({ posts }: Props) {
  return (
    <>
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
    </>
  );
}
