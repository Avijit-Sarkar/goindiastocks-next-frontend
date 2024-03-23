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
        {/* others container */}
        <div className="flex m-4 grow flex-col">
          {/* heading */}
          <div className="flex grow justify-between items-center">
            <div className="flex">
              <p className=" font-bold">username</p>
              <button className="bg-blue-800 h-6 mx-4 px-4 text-sm rounded-full text-white">
                sector 2
              </button>
            </div>
            <div className="text-xs text-blue-500">2 min ago</div>
          </div>
          <div className="mr-16 mt-2">
            <div className="text-justify tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate debitis ab repellendus iure adipisci accusantium aut.
            </div>
            <div className="flex items-center justify-between mt-2 text-sm">
              <button className=" hover:text-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>2k</span>
              </button>
              <button className=" hover:text-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>2k</span>
              </button>
              <button className=" hover:text-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>2k comments</span>
              </button>
              <button className=" hover:text-gray-400 text-gray-800 font-bold py-2 rounded inline-flex items-center">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
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

{
  /* <div className="bg-white border rounded-sm">
  <div className="flex p-5">
    <div className="m-4">
      <img
        src="https://lh3.googleusercontent.com/a/AGNmyxaGAjZCk0rFDw2I-oM0VrBDcCTusSlW0sPVLDWtYg=s96-c"
        className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        alt=""
      />
    </div>
    <div className="flex m-4 flex-col">
      <div className="flex grow justify-between">
        <div className="flex">
          <p className=" font-bold">username</p>
          <button className="bg-blue-800 h-6 mx-4 px-4 text-sm rounded-full text-white">
            sector 2
          </button>
        </div>
        <div className="text-xs text-blue-500">2 min ago</div>
      </div>
      <div className="m-4 p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        debitis ab repellendus iure adipisci accusantium aut, perferendis
        similique officiis blanditiis sapient
      </div>
    </div>
  </div>
</div>; */
}
