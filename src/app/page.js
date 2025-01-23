import PostCard from "@/components/PostCard";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="my-16">
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
        {data.map((post, idx) => (
          <PostCard key={idx} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
