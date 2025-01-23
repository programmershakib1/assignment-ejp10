import PostCard from "@/components/PostCard";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="mx-5 md:mx-0 my-8 md:my-16">
      <h2 className="text-center text-2xl font-bold">Blog Post</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5 md:mt-10">
        {data.map((post, idx) => (
          <PostCard key={idx} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
