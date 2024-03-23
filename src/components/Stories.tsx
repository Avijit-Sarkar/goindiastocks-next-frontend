"use client";

import { marketStoriesData } from "@/types/market-stories";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
  const [data, setData] = useState<marketStoriesData>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("/api/market-stories");
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="px-4 ">
      {data?.map((story, index) => (
        <Story key={index} story={story} />
      ))}
    </div>
  );
};

export default Stories;
