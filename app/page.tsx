import FontTest from "@/components/card/FontTest";
import PostCardClient from "@/components/card/PostCardClient";
import PostCardList from "@/components/card/PostCardList";
import { loadPost } from "./lib/data/fetchPost";

export default function Home() {
  return (
    <main >

      <section >
        <FontTest />
        <PostCardList />
        {/* <PostCardClient  loadPost={loadPost()}/> */}
      </section>
    </main>
  );
}