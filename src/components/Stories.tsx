import { FC } from "react";
import Story from "./Story";

interface StoriesProps {}

const Stories: FC<StoriesProps> = ({}) => {
  return (
    <div className="px-4 mt-24">
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default Stories;
