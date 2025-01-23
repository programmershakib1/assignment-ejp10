"use client";

const PostDetails = ({ data }) => {
  const { title, body } = data;

  return (
    <div className="my-16 border p-5 rounded-xl h-60 flex flex-col justify-center items-center text-center shadow-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-10">{body}</p>
    </div>
  );
};

export default PostDetails;
