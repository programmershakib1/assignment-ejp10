import PostDetails from "@/components/PostDetails";

const BlogDetails = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const data = await res.json();

  return (
    <div className="mx-5 md:mx-0 my-8 md:my-16">
      <h2 className="mb-5 md:mb-10 text-center text-2xl font-bold">
        Blog Details
      </h2>
      <PostDetails data={data}></PostDetails>
    </div>
  );
};

export default BlogDetails;
