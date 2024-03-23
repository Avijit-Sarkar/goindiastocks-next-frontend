"use client";

import { discussionDatas } from "@/types/discussion";
import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [data, setData] = useState<discussionDatas>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("/api/discussion");
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="px-4">
      {data?.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
