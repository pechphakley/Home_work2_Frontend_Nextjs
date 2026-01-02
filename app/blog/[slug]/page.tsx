import React from "react";

import PostCardShadcd from "@/components/card/PostCardShadcd";
export async function loadPostsById(id:string){
   const data= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
   const post=await data.json();
   return post;
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await loadPostsById(slug);
//   const post = await loadPostsById(slug);


  return (
    <PostCardShadcd
      key={post.id}
      userId={post.userId}
      id={post.id}
      title={post.title}
      body={post.body}
    />
  );
}
