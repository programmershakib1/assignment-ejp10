import PostDetails from "@/components/PostDetails";

const BlogDetails = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const data = await res.json();

  return (
    <div className="my-10">
      <PostDetails data={data}></PostDetails>
    </div>
  );
};

export default BlogDetails;
