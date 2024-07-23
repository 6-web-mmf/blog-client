import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { IPosts } from "../types/posts.type"

const Post: React.FC = () => {
  const { postId } = useParams<{ postId: string }>()
  const navigate = useNavigate()
  const [post, setPost] = useState<IPosts | null>(null)

  useEffect(() => {
    const blogPosts: IPosts[] = [
      {
        _id: "1",
        title: "Как же я хорош",
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ",
        author: "Дмитрий Сержпутовский",
        img: "https://www.mamanatural.com/wp-content/uploads/Genevieve-Mama-Natural-photo-scaled.jpg",
      },
      {
        _id: "2",
        title: "За JAVA готов и убить",
        content: "Прога",
        author: "Артем Эльяшевич",
        img: "https://www.mamanatural.com/wp-content/uploads/Genevieve-Mama-Natural-photo-scaled.jpg",
      },
      {
        _id: "3",
        title: "В СБО ебут",
        content: "Общага",
        author: "Алексей Коржов",
        img: "https://www.mamanatural.com/wp-content/uploads/Genevieve-Mama-Natural-photo-scaled.jpg",
      },
    ]

    const foundPost = blogPosts.find(p => p._id === postId)
    setPost(foundPost || null)
  }, [postId])

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto p-6 min-h-screen flex flex-col mb-10">
      <button
        onClick={() => navigate(-1)}
        className="text-white bg-orange-500 hover:bg-orange-600 py-2 px-4 rounded mb-6 self-start"
      >
        Go back
      </button>
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden flex-grow">
        <img src={post.img} alt={post.title} className="w-full md:w-1/2 h-auto object-cover" />
        <div className="p-8 md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 mb-4 text-lg">{post.content}</p>
          <p className="text-gray-500 text-sm">By {post.author}</p>
        </div>
      </div>
    </div>
  )
}

export default Post
