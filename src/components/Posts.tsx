import { FC } from "react";
import Post from "./Post";

interface PostsProps {}

const Posts: FC<PostsProps> = ({}) => {
  return (
    <div className="px-4">
      <Post />
    </div>
  );
};

export default Posts;
