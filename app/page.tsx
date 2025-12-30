import PostCardList from "@/components/card/PostCardList";

export default function Home() {
  return (
    <main className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
   
      <section className="w-full">
   <PostCardList />
      </section>
    </main>
  );
}