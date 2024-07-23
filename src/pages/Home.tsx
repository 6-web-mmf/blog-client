import React from "react";
import { IBanner } from "../types/banner.type";
import { Banner } from "../components/component/Banner";
import { IPosts } from "../types/posts.type";
import { CardList } from "../components/component/CardList";


const Home: React.FC = () => {
    const blogBanner: IBanner = {
        title: "We are the best blog site in the world!",
        subtitle: "Enjoy our site",
        img: "https://bloggingguide.com/wp-content/uploads/2021/12/6461.png"
    }
    const blogPosts: IPosts[] = [
        {
          _id: "1",
          title: "Как же я хорош",
          content: "Создатель",
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
        {
          _id: "4",
          title: "В СБО ебут",
          content: "Общага",
          author: "Алексей Коржов",
          img: "https://www.mamanatural.com/wp-content/uploads/Genevieve-Mama-Natural-photo-scaled.jpg",
        },
        {
          _id: "5",
          title: "В СБО ебут",
          content: "Общага",
          author: "Алексей Коржов",
          img: "https://www.mamanatural.com/wp-content/uploads/Genevieve-Mama-Natural-photo-scaled.jpg",
        },
        {
          _id: "6",
          title: "В СБО ебут",
          content: "Общага",
          author: "Алексей Коржов",
          img: "https://www.mamanatural.com/wp-content/uploads/Genevieve-Mama-Natural-photo-scaled.jpg",
        },
      ]
    return (
        <React.Fragment>
            <Banner item={blogBanner}/>
            <h1 className="text-center font-extrabold text-orange-500 text-5xl mt-10 mb-5">All posts</h1>
            <div className="container mx-auto p-6">
                <CardList posts={blogPosts} />
            </div>
        </React.Fragment>
    )
}

export default Home