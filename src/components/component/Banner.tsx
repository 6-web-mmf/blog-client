import React from "react"
import { IBanner } from "../../types/banner.type"

interface Props {
  item: IBanner
}

export const Banner: React.FC<Props> = ({ item }) => {
  return (
    <div className="bg-orange-500 flex items-center justify-between p-6 md:p-12 h-96 md:h-96">
      <div>
        <h1 className="text-2xl md:text-5xl text-white font-extrabold mb-4">{item.title}</h1>
        <h2 className="text-xl md:text-2xl text-white mb-4">{item.subtitle}</h2>
      </div>
      <div className="flex-shrink-0">
        <img src={item.img} alt="Books" className="w-64 h-auto md:w-[32rem]" />
      </div>
    </div>
  );
};
