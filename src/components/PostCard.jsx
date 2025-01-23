import Link from "next/link";

const PostCard = ({ post }) => {
  const { id, title } = post;
  return (
    <div className="border border-black rounded-md shadow-md h-40 flex justify-center items-center">
      <Link href={`/blog/${id}`}>
        <h2 className="text-xl font-bold text-center">{title}</h2>
      </Link>
    </div>
  );
};

export default PostCard;
