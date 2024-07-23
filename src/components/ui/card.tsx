import React from "react"
import { IPosts } from "../../types/posts.type"
import { useNavigate } from "react-router-dom";

interface Props {
  post: IPosts
}

export const Card: React.FC<Props> = ({ post }) => {
  const navigate = useNavigate()

  const handleClick = (): void => {
    navigate(`/post/${post._id}`)
  }
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={handleClick}>
      <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-700 mb-4">{post.content}</p>
        <p className="text-gray-500 text-sm">By {post.author}</p>
      </div>
    </div>
  );
};
