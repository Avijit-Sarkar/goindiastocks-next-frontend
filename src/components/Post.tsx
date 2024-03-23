/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { discussionData } from "@/types/discussion";

interface PostProps {
  post: discussionData;
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className="mb-7 mt-2 border rounded-md shadow-md shadow-black/40">
      <div className="flex justify-center">
        {/* image container */}
        <img
          src={post.userImage}
          className="rounded-full h-10 w-10 md:h-12 md:w-12 object-contain border m-1 md:m-4"
          alt=""
        />
        {/* other details container */}
        <div className="flex m-2 md:m-4 grow flex-col text-[10px] md:text-base">
          {/* heading */}
          <div className="flex grow justify-between items-center">
            <div className="flex">
              <p className=" font-bold">{post.userName}</p>
              <button className="bg-blue-800 mx-2 px-2 md:mx-4 md:px-4 text-[10px] md:text-sm rounded-full text-white">
                {post.badge}
              </button>
            </div>
            <span className="text-[10px] text-blue-500 font-bold">
              2 min ago
            </span>
          </div>
          {/* description */}
          <div className="mr-6 md:mr-16 mt-2">
            <div className="text-justify md:tracking-tight">
              {post.description}
            </div>
            {/* Buttons */}
            <div className="flex items-center justify-between mt-2 text-[10px] md:text-sm">
              <button className=" hover:text-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 md:w-6 h-4 md:h-6 mr-1 md:mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>

                <span className="text-[10px]">2k</span>
              </button>
              <button className=" hover:text-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 md:w-6 h-4 md:h-6 mr-1 md:mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <span className="text-[10px]">2k</span>
              </button>
              <button className=" hover:text-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 md:w-6 h-4 md:h-6 mr-1 md:mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>

                <span className="text-[10px]">2k comments</span>
              </button>
              <button className=" hover:text-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 md:w-6 h-4 md:h-6 mr-1 md:mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>

                <span className="text-[10px]">share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
