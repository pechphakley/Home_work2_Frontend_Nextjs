const BASE_API=process.env.NEXT_PUBLIC_API_URL;

export async function loadPost(){
   const data= await fetch(`${BASE_API}posts`);
   const post=await data.json();
   return post;
}   