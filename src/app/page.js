import PostCard from "@/components/PostCard";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="my-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((post, idx) => (
          <PostCard key={idx} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
