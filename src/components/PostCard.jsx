import Link from "next/link";

const PostCard = ({ post }) => {
  const { id, title } = post;
  return (
    <div className="border rounded-xl shadow-lg h-52 flex justify-center items-center p-5">
      <Link href={`/blog/${id}`}>
        <h2 className="font-bold text-center">{title}</h2>
      </Link>
    </div>
  );
};

export default PostCard;
