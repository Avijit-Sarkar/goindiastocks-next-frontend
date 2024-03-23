"use client";

import Posts from "@/components/Posts";
import Stories from "@/components/Stories";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("post");

  return (
    <div className="bg-white flex-grow min-h-screen overflow-y-auto">
      <div className="hidden md:grid grid-cols-1 md:grid-cols-5 max-w-7xl mx-auto">
        <section className="md:col-span-3">
          {/* Dicussion Forums */}
          <div className="flex space-x-2 p-4">
            <div>
              <p className="text-center rounded-sm p-2 text-4xl bg-gray-100 text-red-500 font-semibold uppercase">
                Discussion Forum
              </p>
            </div>
          </div>
          {/* Posts */}
          <Posts />
        </section>

        <section className="hidden xl:inline-grid md:col-span-2 justify-center">
          {/* Market Stories */}
          <div className="flex space-x-2 p-4">
            <div>
              <p className="text-center rounded-sm p-2 text-xl bg-gray-100 text-red-500 font-semibold uppercase">
                Market Stories
              </p>
            </div>
          </div>
          <Stories />
        </section>
      </div>

      <div className="mx-auto flex flex-col">
        <div className="flex flex-row px-2 bg-blue-950 mb-8 text-white">
          <button
            onClick={() => setActive("post")}
            className={`w-full py-3 ${
              active === "post"
                ? "bg-blue-950 border-b-4 border-red-600"
                : "bg-blue-800"
            }`}
          >
            Discussion Forum
          </button>
          <button
            onClick={() => setActive("story")}
            className={`w-full py-3 ${
              active !== "post"
                ? "bg-blue-950 border-b-4 border-red-600"
                : "bg-blue-800"
            }`}
          >
            Market Stories
          </button>
        </div>

        {active === "post" ? <Posts /> : <Stories />}
      </div>
    </div>
  );
}
