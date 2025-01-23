"use client";

const PostDetails = ({ data }) => {
  const { title, body } = data;

  return (
    <div className="my-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-5">{body}</p>
    </div>
  );
};

export default PostDetails;
