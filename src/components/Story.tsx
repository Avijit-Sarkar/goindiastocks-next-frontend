/* eslint-disable @next/next/no-img-element */
import { marketStoriesData } from "@/types/market-stories";
import { FC } from "react";

interface StoryProps {
  story: marketStoriesData;
}

const Story: FC<StoryProps> = ({ story }) => {
  return (
    <div className="max-w-xs my-4 rounded overflow-hidden shadow-lg">
      <img className="w-full" src={story.image} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-md mb-2">{story.title}</div>
        <p className="text-gray-700 text-xs">{story.description}</p>
      </div>
    </div>
  );
};

export default Story;
