/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

interface PostProps {}

const Post: FC<PostProps> = ({}) => {
  return (
    <div className="bg-gray my-7 border rounded-sm shadow-sm shadow-black">
      <div className="flex justify-center">
        {/* image container */}
        <img
          src="https://lh3.googleusercontent.com/a/AGNmyxaGAjZCk0rFDw2I-oM0VrBDcCTusSlW0sPVLDWtYg=s96-c"
          className="rounded-full h-12 w-12 object-contain border m-4"
          alt=""
        />
        {/* other details container */}
        <div className="flex m-4 grow flex-col">
          {/* heading */}
          <div className="flex grow justify-between items-center">
            <div className="flex">
              <p className=" font-bold">Lorem ipsum</p>
              <button className="bg-blue-800 h-6 mx-4 px-4 text-sm rounded-full text-white">
                sector 2
              </button>
            </div>
            <span className="text-xs text-blue-500 font-bold">2 min ago</span>
          </div>
          {/* description */}
          <div className="mr-16 mt-2">
            <div className="text-justify tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate debitis ab repellendus iure adipisci accusantium aut.
            </div>
            {/* Buttons */}
            <div className="flex items-center justify-between mt-2 text-sm">
              <button className=" hover:text-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>

                <span>2k</span>
              </button>
              <button className=" hover:text-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <span>2k</span>
              </button>
              <button className=" hover:text-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>

                <span>2k comments</span>
              </button>
              <button className=" hover:text-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>

                <span>share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
