import React from "react";
import { IPosts } from "../../types/posts.type";
import { Card } from "../ui/card";

interface Props {
    posts: IPosts[]
}

export const CardList: React.FC<Props> = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((item) => (
          <Card key={item._id} post={item} />
        ))}
      </div>
    )
}