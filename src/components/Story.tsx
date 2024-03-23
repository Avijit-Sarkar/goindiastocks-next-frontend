import { FC } from "react";

interface StoryProps {}

const Story: FC<StoryProps> = ({}) => {
  return (
    <div className="max-w-xs mt-4 rounded overflow-hidden shadow-lg">
      <img className="w-full" src="/story-image.jpg" alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-md mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
};

export default Story;
